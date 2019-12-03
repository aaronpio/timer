const args = process.argv.slice(2);

const alarmClock = args => {
  if (args.length === 0) {
    return;
  }

  for (let arg of args) {
    if (arg > 0) {
      setTimeout(() => {
        process.stdout.write("\x07"); //sound
        //console.log("beep");
      }, parseInt(arg) * 1000);
    }
  }
};

alarmClock(args);
