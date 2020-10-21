module.exports = function check(str, bracketsConfig) {
    var arr = str.split ('');

  for ( var i =0; i<str.length; i++){
    for( var j = 0; j<bracketsConfig.length; j++){
      let start = bracketsConfig[j][0];
      let finish = bracketsConfig[j][1];
     
      if(arr[i]==start || arr[i+1] == finish){
         return true;
        } else{
        return  false;
          }
      
      } 
}
}
