var JiraClient = require('jira-connector');
//A specialized class which creates a 'Jira' Environment
//Collaborator: MotionDetector
var md = require('t-motion-detector');

function JiraEnvironmentAsync(params, callback){
  
  var currentState = 0;
  var client = new JiraClient(params);

  //Gets the current state of the environment
  this.GetCurrentState = function()
  {
  	return currentState;
  }

  //Overriden from parent
  this.IsActive = function()
  {
    return client.version.jiraClient.host != undefined;
  }

  this.Client = function()
  {
    return client;
  }
  //TODO: Don't like this
  if (callback)
  {
    callback();
  }
}

JiraEnvironmentAsync.prototype.__proto__ = md.Entities.Environment.prototype;

exports.JiraEnvironmentAsync = JiraEnvironmentAsync;