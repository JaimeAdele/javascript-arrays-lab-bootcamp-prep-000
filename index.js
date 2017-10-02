const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  const moreKittens = [...kittens, name];
  return moreKittens;
}

prependKitten(name){
  const evenMoreKittens = [name, ...kittens];
  return evenMoreKittens;
}
