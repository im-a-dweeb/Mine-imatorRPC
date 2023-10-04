const { Client } = require('discord-rpc');
const exec = require('child_process').exec;

const clientId = '1159000280789168158';

const rpc = new Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log(`Logged in as ${rpc.user.username}`);
});

rpc.login({ clientId }).catch(console.error);

const targetAppName = 'Modelbench.exe';

function updateRPC() {
  exec('tasklist /FI "IMAGENAME eq ' + targetAppName + '"', (error, stdout) => {
    if (stdout.includes(targetAppName)) {
      rpc.setActivity({
        details: 'Modeling...',
        largeImageKey: "model_bench_ico",
        startTimestamp: new Date(),
        buttons: [
          { label: 'Download ModelBench', url: 'https://www.mineimatorforums.com/index.php?/topic/79256-modelbench-115/' },
          { label: 'Mine-imator Forums', url: 'https://www.mineimatorforums.com/index.php?/' }
        ]
      });
    } else {
      rpc.clearActivity();
    }
  });
}

setInterval(updateRPC, 5000); // Update every 10 seconds
