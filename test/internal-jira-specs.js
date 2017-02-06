/*****************************************************
 * Internal tests
 * What are internal tests?
 * As this is a npm package, it should be tested from
 * a package context, so I'll use "interal" preffix
 * for tests which are NOT using the npm tarball pack
 * For all others, the test should obviously include
 * something like:
 * var md = require('t-motion-detector');
 *****************************************************/

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
var should = chai.should();
var fs = require('fs');
var main = require('../main.js');
var ent = require('../Entities.js');
var md = require('t-motion-detector');

chai.use(chaiAsPromised);

describe("When a new jira environment is created, ", function() {
  it('via the Start function it should exist', function () {
    //Prepare
    md.Start({
      initialEnvironment:  new ent.JiraEnvironment({ host: 'some.jiraenvhere.com' })
    });
    md.GetEnvironment().should.not.equal(undefined);
  });

  it('should be real environment existing online.', function (done) {
    //Prepare
    md.Start({
      initialEnvironment:  new ent.JiraEnvironment({
        host: 'tcardoso.atlassian.net',
        basic_auth: {
          username: 'tcardoso@gmail.com',
          password: '1131_n1s4s4l1t5_A'
        }
      })
    });
    md.GetEnvironment().IsActive().should.equal(true);    
  });
});