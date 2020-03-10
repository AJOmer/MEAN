function bracesValid(str){
  var braces = {'}':'{', ']':'[', ')':'('};
  var closing = [];
  for(var i = 0; i < str.length; i++){
    if(str[i] == '{' || str[i] == '[' || str[i] == '('){
      closing.push( str[i] );
      continue;
    }

    if(closing[closing.length - 1] === braces[str[i]]){
      closing.pop();
    }
  }
  if(closing.length == 0){
    return(true);
  }
  return (false);
}

console.log(bracesValid("{{()}}[]"))
console.log(bracesValid("{(})")) 
