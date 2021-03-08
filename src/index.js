exports.min = function min (array) {
  if (!Array.isArray(array)){
  return 0
  }
  else{
  let result = array[0];
  for(let i=0; i<array.length; i++){
    if ((array[i]) < result){
      result = array[i];
    }
  }
  return result;
  }
}

// Maximum
exports.max = function max (array) {
  if (Array.isArray(array)){
    return 0
  }
  else{
    let res = array[0];
    for(let i= 0; i < array.length; i++){
      if ((array[i]) > res){
        res = array[i];
      }   
    }
return res;
  }   
}

// Average
exports.avg = function avg (array) {
  if (!Array.isArray(array)){
    return 0
  }
  else{
    let res = 0;
    for(let i= 0; i < array.length; i++){
      res += array[i]; 
    }
  return res/array.length;
  }
}
