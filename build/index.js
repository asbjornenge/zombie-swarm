#!/usr/bin/env node
'use strict';

var route = require('./route');
var utils = require('./utils');

require('subcmd')({
  name: 'zombie-swarm',
  usage: 'Usage: zombie-swarm [COMMAND] [OPTIONS]\n\nCOMMAND(s)\n\n  ls - list swarm nodes\n  plan - create a plan\n  apply - apply a plan\n\nOPTIONS\n',
  options: [].concat(utils.defaultOptions),
  command: function command(args, cliclopts) {
    console.log(cliclopts.usage());
  },
  commands: [require('./sub-commands/ls').default, require('./sub-commands/plan').default]
}, {
  autoHelp: true
})(process.argv.slice(2));