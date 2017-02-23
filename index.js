'use strict';
require('shelljs/global');
const alfy = require('alfy');

// exec shell silently
config.silent = true;

const info = exec('df -h').stdout;
const lines = info.split('\n');
const contents = lines.map(line => line.split(/\s+/));
const diskinfo = contents.filter(line => /disk(?!\w+)?/g.test(line[0]));
const items = diskinfo.map(info => ({
  title: `Size: ${info[1]}  Used: ${info[2]}  Avail: ${info[3]}`,
  subtitle: info[0],
  arg: `Size: ${info[1]}  Used: ${info[2]}  Avail: ${info[3]}`
}));

alfy.output(items);
