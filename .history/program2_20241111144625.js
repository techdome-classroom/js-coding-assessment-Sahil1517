const decodeTheRing = function (secretMessage, pattern) {

  
  const patternRegex = pattern
      .replace(/\?/g, '.')    
      .replace(/\*/g, '.*');  

  
  const fullMatchRegex = new RegExp(`^${patternRegex}$`);

 
  return fullMatchRegex.test(secretMessage);
};

module.exports = decodeTheRing;
