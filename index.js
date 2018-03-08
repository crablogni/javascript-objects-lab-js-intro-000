var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
<<<<<<< HEAD
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
=======
  return Object.assign({}, object)
>>>>>>> 4f2a83734dcc1a1bdb9210b4b91ac517262bfeb1
}
