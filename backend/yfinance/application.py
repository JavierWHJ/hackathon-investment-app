from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import yfinance as yf
import pandas as pd
import numpy as np

application = Flask(__name__)
CORS(application)

@application.route('/')
def hello():
    return jsonify("hello")

@application.route('/financials/<ticker>')
def get_ticker_financials(ticker):
    df = yf.Ticker(ticker).financials
    df.columns = df.columns.astype(str)
    return (df.to_json())
    
@application.route('/history/<ticker>')
def get_ticker_history(ticker):
    df = yf.Ticker(ticker).history('10y')
    df.index = df.index.date
    df.index = df.index.map(str)
    return (df.to_json())

@application.route('/balance/<ticker>')
def get_ticker_balance_sheet(ticker):
    df = yf.Ticker(ticker).balance_sheet
    df.columns = df.columns.astype(str)
    return (df.to_json())


@application.route('/daily/<ticker>')
def get_daily_change(ticker):
    df = yf.Ticker(ticker).history('2d')
    yesterday= df.iloc[0][3]
    today = df.iloc[1][3]
    output = round(((today/yesterday) -1) * 100, 2)
    return jsonify({"current_price" : today,"percent_change" : output})

if __name__ == '__main__':
    application.run()

