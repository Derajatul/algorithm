const spinalCase = (str: string):string => {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}
module.exports = spinalCase;