const titleCase = (str) => str.toLowerCase().split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ') 

module.exports = titleCase;