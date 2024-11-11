const decodeTheRing = function (secretMessage, pattern) {

  // Regular expression to convert the pattern into a matchable regex
  const patternRegex = pattern
      .replace(/\?/g, '.')    // Replace '?' with '.' to match any single character
      .replace(/\*/g, '.*');  // Replace '*' with '.*' to match any sequence of characters (including none)

  // Create a full match regex to match the entire string
  const fullMatchRegex = new RegExp(`^${patternRegex}$`);

  // Test the secret message against the regex
  return fullMatchRegex.test(secretMessage);
};

module.exports = decodeTheRing;
