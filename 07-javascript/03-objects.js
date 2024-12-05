let result = {};

const insertItem = (key, value) => {
  // insertItem the property with key and value into result
  result[key] = value;
  return key;
};

const deleteItem = (key) => {
  // remove the property with key from result
  delete result[key];
  return key;
};

const lookupItem = (key) => {
  // return the value from result that is associated with key
  return result[key] ? result[key] : "Item does not exist";
};

const printItems = () => {
  // return a string of the concatenated key in result, separated by commas
  let out = "";
  let keys = Object.keys(result);
  const mylen = keys.length;

  for (let index = 0; index < mylen; index++) {
    out += keys[index];
    // add a comma if not the last inde
    mylen - 1 - index ? (out += ", ") : {};
  }

  return out;
};

insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'ipsum'

deleteItem("lorem");
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'Item does not exist'
