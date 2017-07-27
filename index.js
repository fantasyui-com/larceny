#!/usr/bin/env node

const program = require('commander');
const postcss = require('postcss');
const theft = require('theft');
const perfectionist = require('perfectionist');
const fs = require('fs');

program
  .version('0.1.0')
  .option('-u, --url [url]', 'Url of remote file.')
  .option('-s, --source-selector [selector]', 'Source selector')
  .option('-t, --target-selector [selector]', 'Target selector (in local file)')
  .option('-f, --file [path]', 'Add the specified type of cheese [styles.css]')
  .parse(process.argv);

  postcss([ theft({url:program.url, source: [program.sourceSelector], target:program.targetSelector }), perfectionist, ])
  .process(fs.readFileSync(program.file))
  .then(result => { fs.writeFileSync(program.file, result.css ) })
  .catch(err => { console.error( err ) });
