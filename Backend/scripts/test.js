const { readFileSync } = require('fs');

const { Client } = require('ssh2');

const conn = new Client();
let pass = "123";
let command = "sudo apt install glances -y"
conn.on('ready', () => {
    console.log('Client :: ready');
    conn.exec(command, { pty: true }, (err, stream) => {
      if (err) throw err;
      stream.on('close', (code, signal) => {
        console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
        conn.end();
      }).on('data', (data) => {
          if (data.toString().includes("[sudo] password for")) {
              stream.write(pass+ '\n');
          }
          else {
              console.log('STDOUT: ' + data);
            }
      }).stderr.on('data', (data) => {
        console.log('STDERR: ' + data);
      });
    });
  }).connect({
  host: '192.168.1.15',
  port: 22,
  username: 'ryo',
  password: pass
});