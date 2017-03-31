'use strict';

var afrFunctions = require('./modules/afrFunctions');

afrFunctions.getAndProcessData('CBA', (res) => console.log(res));

const APP_ID = 'amzn1.ask.skill.1bcb51a5-fa1e-4dbc-8700-570e25714829';
const SPEECH_OUTPUT = 'Hello Dev, and a warm welcome to all of those from fairfax attending todays Alexa Hackday';

const AlexaSkill = require('./AlexaSkill');
const GreeterService = function() {
    AlexaSkill.call(this, APP_ID);
};

GreeterService.prototype = Object.create(AlexaSkill.prototype);
const shareDataShout = function(intent, session, response) {
    response.tell(SPEECH_OUTPUT);
};

GreeterService.prototype.eventHandlers.onLaunch = shareDataShout;

GreeterService.prototype.intentHandlers = {
    'HelloWorldIntent': shareDataShout
};

exports.handler = function(event, context) {
    const greeterService = new GreeterService();
    greeterService.execute(event, context);
};
