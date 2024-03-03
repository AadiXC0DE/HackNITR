from flask import Flask, request
from griptape.structures import Agent
from griptape.tools import WebScraper, FileManager, TaskMemoryClient
from randomNumberGenerator.tool import RandomNumberGenerator
from langchain import hub
from langchain.agents import AgentExecutor, create_react_agent
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_openai import OpenAI
import json
from mongoengine import Document, StringField, DateTimeField
from mongoengine import connect

# Replace with your actual database name
db_name = 'koalavision'

# Construct the connection string using your credentials
connection_string = f"mongodb+srv://amoghpreneur:amgo69@cluster1.vx1tnwk.mongodb.net/koalavision"

# Connect to MongoDB
connect(host=connection_string)

class Event(Document):
    title = StringField(required=True)
    date = StringField(required=True)
    time = StringField(required=True)


app = Flask(__name__)

@app.route("/connect", methods=['post'])
def hello_world():
    agent = Agent(
        input_template="Load {{ args[0] }}, summarize it, and store it in a file called {{ args[1] }}.",
        tools=[]
    )
    agent.run("https://griptape.ai", "griptape.txt")
    data = request.json
    return data

@app.route("/", methods=['post'])
def get_convo():
    # access request data, and perform operations on it
    rng_tool = RandomNumberGenerator()
    task_memory_client = TaskMemoryClient(off_prompt=True)
    agent = Agent(
            tools=[rng_tool, FileManager(), ],
            )
    #agent.run("generate a title for this text and store it in title.txt ```Alice: Hey, Bob! I was thinking of planning a trip to Rourkela this weekend. Want to join? Bob: Oh, that sounds great! I've never been there before. When were you thinking of going? Alice: I was thinking of catching the train on Saturday morning at 10 am. It's the most convenient time for me. Bob: Sounds good to me! I'll check my schedule to make sure I'm free that day. Alice: Awesome! Let me know as soon as possible so we can book the tickets. Rourkela has some beautiful sights to see, and I don't want to miss out. Bob: Absolutely, I'll get back to you by tonight. By the way, do you know how long the train journey takes? Alice: It's around 6 hours by train, so we'll reach Rourkela by around 4 pm. That should give us plenty of time to settle in and explore a bit. Bob: Perfect! I'll make sure to pack everything we need for the trip. Should we book our return tickets as well? Alice: Yeah, let's book our return tickets for Sunday evening. We can catch the train back around 6 pm, giving us a full day to explore Rourkela. Bob: Sounds like a plan! I'm really looking forward to this trip. Thanks for inviting me, Alice! Alice: No problem, Bob! It's always more fun to travel with friends. Let's make it a memorable weekend in Rourkela!``` if there are any planned departure dates or schedules store them in a schedule.json file where json format is {title , date , time} read text from rng.txt and assign it to title you don't need any tool for getting the schedule date and time, don't make an array of object, there will be one single object,")
    agent.run(f"generate a title for this text and store it in title.txt ```{conversation}``` if there are any planned departure dates or schedules store them in a schedule.json file where json format is {{title , date , time}} read text from rng.txt and assign it to title you don't need any tool for getting the schedule date and time, don't make an array of object, there will be one single object,")
    with open('schedule.json') as f:
        data = json.load(f)
    #mongodb+srv://amoghpreneur:amgo69@cluster1.vx1tnwk.mongodb.net/
        #dataString = '{"title": "Planning a Weekend Trip to Rourkela", "date": "Saturday", "time": "10 am"}' 
        #data = json.loads(dataString) 
    event = Event(title=data['title'], date=data['date'], time=data['time']);
    event.save()
    return data

@app.route("/getEvent", methods=['get'])
def get_schema():
    events = Event.objects()
    jsonPrep = []
    for event in events:
        jsonPrep.append({"title":event['title'], "time":event['time'], "date":event["date"]})

    return jsonPrep 
