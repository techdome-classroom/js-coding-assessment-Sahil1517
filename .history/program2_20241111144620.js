const decodeTheRing = function (secretMessage, pattern) {

  // Regular expression to convert the pattern into a matchable regex
  const patternRegex = pattern
      .replace(/\?/g, '.')    
      .replace(/\*/g, '.*');  

  
  const fullMatchRegex = new RegExp(`^${patternRegex}$`);

 
  return fullMatchRegex.test(secretMessage);
};

module.exports = decodeTheRing;
