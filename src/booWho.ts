const booWho = (bool:any):boolean => {
  return typeof bool === 'boolean' ? true : false;
}
module.exports = booWho