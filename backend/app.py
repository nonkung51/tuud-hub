from flask import Flask, flash, request, render_template, Response, jsonify
from werkzeug.utils import secure_filename
from datetime import datetime
import json
import os

template_dir = os.path.abspath('./test')
UPLOAD_FOLDER = './storage'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'mp4'}

app  = Flask(__name__, template_folder=template_dir)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def hello_world():
    return 'Hello, world!'

def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def getTime():
    return datetime.now(tz=None).strftime("%d-%b-%Y_%H:%M:%S_%f")

def newFileName(filename):
    timeStamp = getTime()
    return filename.rsplit('.', 1)[0] + '_' +  timeStamp + '.' +filename.rsplit('.', 1)[1]

@app.route('/upload', methods=['POST'])
def postVideo():
    print(request.files.to_dict()[''])
    
    file = request.files.to_dict()['']

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
        newfilename = secure_filename(newFileName(filename))
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], newfilename))
        print('saved file')
        data = {
            'code': 'success',
            'filename': newfilename,
            'timestamp': getTime()
        }
        response = app.response_class(
            response=json.dumps(data), 
            status=422, 
            mimetype='application/json'
        )
    
    return response
    

@app.route('/videos', methods=['GET'])
def getVideos():
    pass
