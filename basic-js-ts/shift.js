const shift = (array, direction, step) => {
  if(step < 0 || step > array.length) 
    return;
  if(direction === 'right') 
    step = array.length - step;
  let movedArray = array.splice(0, step);
  return array.concat(movedArray);
}

module.exports = shift;