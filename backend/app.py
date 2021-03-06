from flask import Flask, flash, request, render_template, Response, jsonify
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
from datetime import datetime
from collections import OrderedDict 
import sys
sys.path.append('../')
from model224x224 import predict
import json
import os
import csv

static_folder = os.path.abspath('./storage')
UPLOAD_FOLDER = './storage'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'mp4'}

app  = Flask(__name__, static_folder=static_folder)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, world!'

@app.route('/upload', methods=['POST'])
@cross_origin()
def upload():
    #print(request.files.to_dict()[''])
    title = request.form.get('title')
    #print(request.form.get('title'))
    owner = request.form.get('owner') 
    file = request.files.to_dict()['files']

    if file.filename == '':
        print('no file...')
        data = {
            'code': 'no such file'
        }
        response = app.response_class(
            response=json.dumps(data), 
            status=422, 
            mimetype='application/json'
        )

    elif file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        timeStamp = getTime()
        newfilename = secure_filename(newFileName(filename, timeStamp))
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], newfilename)
        file.save(filepath)
        predict(os.path.join(os.getcwd(), 'storage', newfilename))
        writeDB(title, owner, filepath, timeStamp)
        
        print('saved file')
        data = {
            'code': 'success',
            'title': title,
            'owner': owner,
            'filename': newfilename,
            'timestamp': getTime()
        }
        response = app.response_class(
            response = json.dumps(data), 
            status   = 201, 
            mimetype = 'application/json'
        )
    
    return response

    

@app.route('/media', methods=['GET'])
@cross_origin()
def getMedia():
    data = readDB()
    response = app.response_class(
        response = json.dumps(data),
        status   = 200, 
        mimetype = 'application/json'
    )

    return response

def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def getTime():
    return datetime.now(tz=None).strftime("%d-%b-%Y_%H:%M:%S_%f")

def newFileName(filename, timeStamp):
    return filename.rsplit('.', 1)[0] + '_' +  timeStamp + '.' +filename.rsplit('.', 1)[1]

def writeDB(title = 'title', owner = 'anonymous', filepath ='', timestamp = ''):
    with open('database.db', mode = 'a', encoding="utf-8") as csv_file:
        data = ['title', 'owner', 'filepath', 'timestamp']
        writer = csv.DictWriter(csv_file, fieldnames=data)
        #writer.writeheader()
        writer.writerow({'title': title,'owner': owner, 'filepath': filepath, 'timestamp': timestamp})

def readDB():
    with open('database.db', mode = 'r', encoding="utf-8") as csv_file:
        csv_reader = csv.DictReader(csv_file)
        line_count = 0
        data = []
        for row in csv_reader:
            data.append(row)
            line_count += 1

        return data