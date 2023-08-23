function confirmEnding(str:string, target:string):boolean {
  return str.slice(str.length - target.length) === target;
}
module.exports = confirmEnding; 