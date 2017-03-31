'use strict';
const APP_ID = 'amzn1.ask.skill.1bcb51a5-fa1e-4dbc-8700-570e25714829';
const SPEECH_OUTPUT = 'Hello Dev, and a warm welcome to all of those from fairfax attending todays Alexa Hackday';
const AlexaSkill = require('./AlexaSkill');
const GreeterService = function() {
    AlexaSkill.call(this, APP_ID);
};

GreeterService.prototype = Object.create(AlexaSkill.prototype);
const helloResponseFunction = function(intent, session, response) {
    response.tell(SPEECH_OUTPUT);
};

GreeterService.prototype.eventHandlers.onLaunch = helloResponseFunction;

GreeterService.prototype.intentHandlers = {
    'HelloWorldIntent': helloResponseFunction
};

exports.handler = function(event, context) {
    const greeterService = new GreeterService();
    greeterService.execute(event, context);
};
