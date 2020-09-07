from flask import Flask, request, jsonify
import pandas as pd
import requests
import numpy as np
from flask_cors import CORS

application = Flask(__name__)
CORS(application)

@application.route('/')
def get_articles():
    resp = requests.get(url='http://newsapi.org/v2/top-headlines?'
       'sources=bloomberg,the-wall-street-journal,business-insider,financial-post&'
       'apiKey=92d8292073af4764bc0b2e3d751e47f9')
    response = pd.json_normalize(resp.json())
    articles = response.articles[0]
    
    selected_articles = []
    for i in range(0,10):
        
        article = {
            "title" : articles[i]['title'],
            "url" : articles[i]['url'],
            "img" : articles[i]['urlToImage'],
            "date" : articles[i]['publishedAt'][0:10]
        }
        selected_articles.append(article)
    return jsonify({"result" : selected_articles})

if __name__ == "__main__":
    application.run()