//Define a function called swapCase that takes str as a parameter
function swapCase(str){
    //use replace string method to replace alphabetic characters
    //invoke/call a callback function with an argument
    return str.replace(/[a-zA-Z]/g, function(charAt) {
      //if statement replaces the characters to the opposite case
      if (charAt === charAt.toUpperCase()) {
        return charAt.toLowerCase();
      } else {
        return charAt.toUpperCase();
      }
    });
  }