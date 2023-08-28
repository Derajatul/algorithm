const truncateString = (str, num) => {
 if(num >= str.length){
    return str 
  } else{
    return str.slice(0,num) + '...';
  }
}

module.exports = truncateString;