const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

////////////
// Event Handling for User Input
////////////

stdin.on("data", key => {
  const unicodeArr = [
    "\u0031",
    "\u0032",
    "\u0033",
    "\u0034",
    "\u0035",
    "\u0036",
    "\u0037",
    "\u0038",
    "\u0039"
  ];

  if (key === "\u0003") {
    console.log("Thanks for using me, ciao");
    process.exit();
  } else if (key === "\u0062") {
    process.stdout.write("\x07"); //sound
    //process.stdout.write("beep! ");
  } else if (unicodeArr.includes(key)) {
    setTimeout(() => {
      process.stdout.write("\x07"); //sound
      //process.stdout.write("beep! ");
    }, (unicodeArr.indexOf(key) + 1) * 1000);
  }
});
