//A specialized class which creates a 'Jira' Environment
//Collaborator: MotionDetector
var md = require('t-motion-detector');

function JiraEnvironment(){
  
  var currentState = 0;

  //Gets the current state of the environment
  this.GetCurrentState = function()
  {
  	return currentState;
  }

  //Overriden from parent
  //this.IsActive = function()
  //{
  //  throw "Not Implemented.";
  //}
}

JiraEnvironment.prototype.__proto__ = md.Entities.Environment.prototype;

exports.JiraEnvironment = JiraEnvironment;