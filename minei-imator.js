const { Client } = require('discord-rpc');
const exec = require('child_process').exec;

const clientId2 = '1159006250139398194';

const rpc2 = new Client({ transport: 'ipc' });

rpc2.on('ready', () => {
  console.log(`Logged in as ${rpc2.user.username}`);
});

rpc2.login({ clientId: clientId2 }).catch(console.error);

const targetAppName2 = 'Mine-imator.exe';

function updateRPC() {
  exec('tasklist /FI "IMAGENAME eq ' + targetAppName2 + '"', (error, stdout) => {
    if (stdout.includes(targetAppName2)) {
      rpc2.setActivity({
        details: 'Creating...',
        largeImageKey: "mine-imator_icon",
        startTimestamp: new Date(),
        buttons: [
          { label: 'Download Mine-imator', url: 'https://www.mineimatorforums.com/index.php?/topic/90789-mine-imator-200/' },
          { label: 'Mine-imator Forums', url: 'https://www.mineimatorforums.com/index.php?/' }
        ]
      });
    } else {
      rpc2.clearActivity();
    }
  });
}

setInterval(updateRPC, 5000); // Update every 10 seconds
