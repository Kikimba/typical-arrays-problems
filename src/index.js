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
  if (!Array.isArray(array)){
    return 0
  }
  else{
    let result = array[0];
    for(let i= 0; i < array.length; i++){
      if ((array[i]) > result){
        result = array[i];
      }   
    }
return result;
  }   
}

// Average
exports.avg = function avg (array) {
  if (!Array.isArray(array)){
    return 0
  }
  else{
    let result = 0;
    for(let i= 0; i < array.length; i++){
      result += array[i]; 
    }
  return result/array.length;
  }
}
