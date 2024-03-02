from flask import Flask, request

app = Flask(__name__)

@app.route("/connect", methods=['post'])
def hello_world():
    data = request.json
    conversation_unformatted = request.get("conversation")
    return data

@app.route("/")
def get_convo():
    # access request data, and perform operations on it
    return ""
