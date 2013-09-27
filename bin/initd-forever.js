#!/usr/bin/env node
var daemon = require('../lib/main');

// Log
var traceError = function (error, retval) {
		  if (error) {
		    console.log(error);
		    return;
		  }
		  console.log(retval);
		}

daemon.script(process.arg,traceError);