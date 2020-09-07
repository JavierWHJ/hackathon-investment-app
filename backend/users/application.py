from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS
import datetime
import sys
import os

application = Flask(__name__)
CORS(application)

application.config['MONGO_URI'] = "mongodb://hacker:hacker123@user-cluster-shard-00-00.hlmvm.mongodb.net:27017,user-cluster-shard-00-01.hlmvm.mongodb.net:27017,user-cluster-shard-00-02.hlmvm.mongodb.net:27017/users?ssl=true&replicaSet=atlas-cw7ug7-shard-0&authSource=admin&retryWrites=true&w=majority"

# application.config["MONGO_URI"] = "mongodb://localhost:27017/users"



mongo = PyMongo(application)

@application.route('/', methods=['GET'])
@application.route('/users', methods=['GET'])
def get_all_users():
    
    user = mongo.db.users
    
    output = []
    for u in user.find():
        output.append({'email': u['email'], 'name' : u['name'], 'transactions' : u['transactions'], 'holdings': u['holdings'], 'cash' : u['cash'], 'watchlist' : u['watchlist']})
    return jsonify({'result' : output})

@application.route('/user/<email>', methods=['GET'])
def get_one_user(email):
    user = mongo.db.users
    u = user.find_one({'email' : email})
    if u:
        output = {'email': u['email'], 'name' : u['name'], 'transactions' : u['transactions'], 'holdings': u['holdings'], 'cash' : u['cash'], 'watchlist': u['watchlist']}
    else:
        output = "No such email"
    return jsonify({'result' : output})

@application.route('/user', methods=['POST'])
def add_user():
    user = mongo.db.users
    name = request.json['name']
    email = request.json['email']
    transactions = []
    watchlist = {}  # dont have to be list
    holdings = {}
    cash = 100000000
    user_id = user.insert({'name': name, 'email': email, "transactions" : transactions, "holdings" : holdings, "cash" : cash, "watchlist": watchlist})
    new_user = user.find_one({'_id': user_id })
    output = {'name' : new_user['name'], 'email' : new_user['email'], "transactions" : new_user["transactions"], "holdings" : new_user["holdings"], "cash" : new_user["cash"], 'watchlist': new_user['watchlist']}
    return jsonify({'result' : output})


@application.route('/stock/buy', methods=["POST"])
def purchase_stock():
    email = request.json['email']
    ticker = request.json['ticker']
    price = request.json['price']
    quantity = request.json['quantity']

    cost = price * quantity

    
    transaction = {
        "status" : "buy",
        "ticker" : ticker,
        "price" : price,
        "quantity" : quantity,
        "cost" : cost,
        "date" :datetime.datetime.utcnow() + datetime.timedelta(hours=+8)
    }

    user = mongo.db.users
    u = user.find_one({'email' : email})

    if u['cash'] - cost < 0:
        return jsonify({"result" : "Not allowed"}), 400

    original_transaction = u['transactions']
    original_transaction.append(transaction)
    
    o_holding = u['holdings']
    
    if ticker in o_holding:
        avg = o_holding[ticker][0]
        prev_quan = o_holding[ticker][1]
        new_quan = prev_quan + quantity

        new_avg = (avg * prev_quan + cost ) / new_quan
        o_holding[ticker][0] = round(new_avg,2)
        o_holding[ticker][1] = new_quan
        # o_holding[ticker]["quantity"] += quantity
        # o_holding[ticker]["total_price"] += cost
    else:
        new_arr = [price, quantity,]
        o_holding[ticker] = new_arr
        # o_holding[ticker]["quantity"] = quantity
        # o_holding[ticker]["total_price"] = cost

    user.update_one( {"email" : email} , {"$set": {"transactions": original_transaction, "cash" : u['cash']-cost, "holdings" : o_holding}})

    new_user =  user.find_one( {'email' : email} )
    output = {'name' : new_user['name'], 'email' : new_user['email'], "transactions" : new_user["transactions"], "holdings" : new_user["holdings"], "cash" : new_user["cash"], 'watchlist': new_user['watchlist']}

    return jsonify({'result' : output} )


@application.route('/stock/sell', methods=['POST'])
def sell_stock():
    email = request.json['email']
    ticker = request.json['ticker']
    price = request.json['price']
    quantity = request.json['quantity']
    earning = price * quantity 

    transaction = {
        "status" : "sell",
        "ticker" : ticker,
        "price" : price,
        "quantity" : quantity,
        "earning" : earning,
        "date" : datetime.datetime.utcnow() + datetime.timedelta(hours=+8)
    }

    user = mongo.db.users
    u = user.find_one({'email' : email})

    original_transaction = u['transactions']
    original_transaction.append(transaction)

    h = u['holdings']

    if ticker in h:

        if h[ticker][1] - quantity < 0: 
            return jsonify({"result" : "Not allowed"}), 400
        elif h[ticker][1] - quantity == 0:
            del h[ticker]
        else:
            h[ticker][1] -= quantity
    else:
        return jsonify({"result" : "Not allowed"}), 400

    user.update_one( {"email" : email} , {"$set": {"transactions": original_transaction, "cash" : u['cash']+earning, "holdings" : h}})
    new_user =  user.find_one( {'email' : email} )
    output = {'name' : new_user['name'], 'email' : new_user['email'], "transactions" : new_user["transactions"], "holdings" : new_user["holdings"], "cash" : new_user["cash"], 'watchlist': new_user['watchlist'] }

    return jsonify({'result' : output} )

@application.route('/watchlist/<email>', methods=['GET'])
def get_watchlist(email):
    user = mongo.db.users
    u = user.find_one({'email' : email})
    output = {'name' : u['name'], 'watchlist' : u['watchlist']}
    return jsonify({'result' : output})

@application.route('/watchlist', methods=['POST'])
def add_to_watchlist():
    user = mongo.db.users
    email = request.json['email']
    ticker = request.json['ticker']
    u = user.find_one({'email' : email})

    watchlist = u['watchlist']
    watchlist[ticker] = 1
    
    user.update_one( {"email" : email} , {"$set": {"watchlist" : watchlist}})
    new_user =  user.find_one( {'email' : email} )
    output = {'name' : new_user['name'], 'email' : new_user['email'], "transactions" : new_user["transactions"], "holdings" : new_user["holdings"], "cash" : new_user["cash"], 'watchlist': new_user['watchlist'] }
    return jsonify({'result' : output} )

@application.route('/watchlist/<ticker>', methods=['DELETE'])
def remove_from_watchlist(ticker):
    user = mongo.db.users
    email = request.json['email']   
    u = user.find_one({'email' : email}) 
    watchlist = u['watchlist']
    if ticker in watchlist:
        del watchlist[ticker]
    user.update_one( {"email" : email} , {"$set": {"watchlist" : watchlist}})
    new_user =  user.find_one( {'email' : email} )
    output = {'name' : new_user['name'], 'email' : new_user['email'], "transactions" : new_user["transactions"], "holdings" : new_user["holdings"], "cash" : new_user["cash"], 'watchlist': new_user['watchlist'] }
    return jsonify({'result' : output} )



if __name__ == '__main__':
    application.run()

