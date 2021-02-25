module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 == 1 || str.length < 2) {
    return false;
}

  let arr = str.split ('');
//  console.log(arr);
  for ( let i =0; i<str.length; i++){
    for( let j = 0; j<bracketsConfig.length; j++){
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