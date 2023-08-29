const truncateString = (str:string, num:number) => {
 if(num >= str.length){
    return str 
  } else{
    return str.slice(0,num) + '...';
  }
}

module.exports = truncateString;