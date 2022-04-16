const Discord = require("discord.js");
const myid = [''] // id xot da bne 
const polat = new Discord.Client();
const polat2 = new Discord.Client();
const polat3 = new Discord.Client();
const polat4 = new Discord.Client();
const polat5 = new Discord.Client();
const polat6 = new Discord.Client();


///////// id vc dane hata bcheta vc 


polat.on("ready", () => {
  var join = polat.channels.get(""); /// id voice
  if (join) join.join();
});
///////////////////
polat2.on("ready", () => {
  var join = polat2.channels.get(""); /// id voice
  if (join) join.join();
});
///////////////////
polat3.on("ready", () => {
  var join = polat3.channels.get(""); /// id voice
  if (join) join.join();
});
///////////////////
polat4.on("ready", () => {
  var join = polat4.channels.get(""); /// id voice
  if (join) join.join();
});
///////////////////
polat5.on("ready", () => {
  var join = polat5.channels.get(""); /// id voice
  if (join) join.join();
});
///////////////////
polat6.on("ready", () => {
  var join = polat6.channels.get(""); /// id voice
  if (join) join.join();
});


//////// playing or dnd  streaming ////////

polat.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`polat bot`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

polat2.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`polat bot`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano2.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

polat3.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`polat bot`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano3.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////
//////// playing or dnd  streaming ////////

polat4.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`polat bot`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

polat5.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`polat bot`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano2.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

polat6.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`polat bot`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano3.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////




////// spam krdn ba acc

polat.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
          
        }
      }
});
////

polat2.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
          
        }
      }
});
///////
polat3.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
          
        }
      }
});

////////

polat4.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
          
        }
      }
});


//////

polat5.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
          
        }
      }
});


///////
polat6.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
          
        }
      }
});


polat.login("");
polat2.login("");
polat3.login("");
polat4.login("");
polat5.login("");
polat6.login("");
