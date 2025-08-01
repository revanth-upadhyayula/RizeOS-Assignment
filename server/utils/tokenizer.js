import pkg from 'natural';
const { WordTokenizer } = pkg;

const tokenizer = new WordTokenizer();

function tokenize(text) {
  return tokenizer.tokenize(text || "").map(token => token.toLowerCase());
}

function matchScore(userBio, jobDescription) {
  const userTokens = tokenize(userBio);
  const jobTokens = tokenize(jobDescription);
  return userTokens.filter(token => jobTokens.includes(token)).length;
}

export default { tokenize, matchScore };