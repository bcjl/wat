//Turn your string into binary! Then into some JavaScripts wat!
//TODO: Can I get past this binary thing so I can natively translate 
//stuff by entering the overly long wat expression?
var wat = {
  toWat: function(String){
    return BWC.toWat(ABC.toBinary(String));
  },
  fromWat: function(watString){
    console.log(BWC.fromWat(watString));
    return ABC.toAscii(BWC.fromWat(watString));
  }
}


// ABC - a generic, native JS (A)scii(B)inary(C)onverter.
// (c) 2013 Stephan Schmitz <eyecatchup@gmail.com>
// License: MIT, http://eyecatchup.mit-license.org
// URL: https://gist.github.com/eyecatchup/6742657
var ABC={toAscii:function(a){return a.replace(/\s*[01]{8}\s*/g,function(a){return String.fromCharCode(parseInt(a,2))})},toBinary:function(a,b){return a.replace(/[\s\S]/g,function(a){a=ABC.zeroPad(a.charCodeAt().toString(2));return!1==b?a:a+""})},zeroPad:function(a){return"00000000".slice(String(a).length)+a}};

// BWC - a weird, JS (B)inary(W)at(C)onverter.
  var BWC = {
    toWat: function(binary){
      var input = binary.toString();
      var output = "";
      var keys = {
        "0": "[+[]]+[]",
        "1": "[++[[]][+[]]]+[]"
      };


      output += input.replace(/[01]/g, function(match){return keys[match] + "+"});
      return output.substr(0, output.length - 1);
    },

    fromWat: function(watString){
      return eval(watString);
    }
  }

