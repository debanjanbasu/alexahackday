'use strict';
const APP_ID = 'amzn1.ask.skill.5f33cec2-35e8-4e7d-a692-3b3784f9d1b9';
const SPEECH_OUTPUT = 'Hello, and a warm welcome to all of those from fairfax attending todays Alexa 1 o 1';
const AlexaSkill = require('./AlexaSkill');
const GreeterService = () => {
    AlexaSkill.call(this, APP_ID);
};

GreeterService.prototype = Object.create(AlexaSkill.prototype);
const helloResponseFunction = (intent, session, response) => {
    response.tell(SPEECH_OUTPUT);
};

GreeterService.prototype.eventHandlers.onLaunch = helloResponseFunction;

GreeterService.prototype.intentHandlers = {
    'HelloWorldIntent': helloResponseFunction
};

exports.handler = (event, context) => {
    var greeterService = new GreeterService();
    greeterService.execute(event, context);
};
