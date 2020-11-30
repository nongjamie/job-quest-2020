let removeDuplicates = (data) => {
  return data.filter((value, index) => {
    return data.indexOf(value) === index;
  });
}

const secondMax = (array) => {
  array = removeDuplicates(array);
  array.sort((a, b) => a - b);
  if(array.length > 1)
    return array[array.length - 2];
  else if(array.length == 1)
    return array[array.length - 1];
  else
    throw new Error('Error !');
}

module.exports = secondMax;