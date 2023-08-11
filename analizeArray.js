function analizeArray(arr){
  const result = {};
  result.average = (arr.reduce((acc, prev) => acc + prev, 0))/arr.length;
  result.min = Math.min(...arr);
  result.max = Math.max(...arr);
  result.length = arr.length;

  return result;
}

module.exports = analizeArray;