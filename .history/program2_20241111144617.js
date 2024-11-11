const decodeTheRing = function (secretMessage, pattern) {

  // Regular expression to convert the pattern into a matchable regex
  const patternRegex = pattern
      .replace(/\?/g, '.')    
      .replace(/\*/g, '.*');  // Replace '*' with '.*' to match any sequence of characters (including none)

  
  const fullMatchRegex = new RegExp(`^${patternRegex}$`);

 
  return fullMatchRegex.test(secretMessage);
};

module.exports = decodeTheRing;
