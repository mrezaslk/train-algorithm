var greet = function (name) {
  let capitalizeFirstLetter =
    String(name).charAt(0).toUpperCase() +
    String(name).slice(1).toLocaleLowerCase();
  let finalText = "Hello " + capitalizeFirstLetter + "!";
  return finalText;
};

greet("BILLY");
