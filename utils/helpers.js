export function validateInputLength(text) {
  return (text.length > 0); //max length is handled by the text input components directly
}

export function validateUniqueDeckName(text, deckNames) {
  return deckNames.includes(text);
}

export function validateUniqueCard(question, answer, questions){
  return questions.some((card) => card.question === question && card.answer === answer);
}

export const getName = (fn) => { // get function name for error logging
  // source: http://jsfiddle.net/ncays/ and
  // https://stackoverflow.com/questions/1013239/can-i-get-the-name-of-the-currently-running-function-in-javascript
  return fn.toString();
}

export const logResponse = (func, res) => {
  return console.log(getName(func), JSON.stringify(res));
}

export const getCurrentTimeISOString = () => {
  // time in ISO String format
  return new Date(Date.now()).toISOString();
}

export const getRandomizedCurrentTimeISOString = () => {
  // pseduo random human readable format date in future times
  let randInt = getRandomInt();
  return new Date(Date.now() + randInt).toISOString();
}

export const getRandomInt = () => {
  // from MDN - min inclusive, max exclusive
  let min = 1;
  let max = 1000;
  return Math.floor(Math.random() * (max-min) + min);
}

const setIncrement = () => {
  // deterministic time increment to prevent primary key collisions in database
  let cache = 0;
  return () => {
    cache+=1;
    return cache;
  }
}

const getIncrement = setIncrement();

const getSafeTime = () => {
  return new Date(Date.now()+getIncrement());
}

export const getSafeTimeISO = () => {
  // prevents collisions in initial data population
  // for in-app use - use getCurrentTimeISOString
  return getSafeTime().toISOString();
}

export function parseISOString(s) {
  // credit to stack overflow user RobG
  // parses iso string to get date object
  // source: https://stackoverflow.com/questions/27012854/change-iso-date-string-to-date-object-javascript
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

export const convertISOToHumanReadable = (isoTime) => {
  return parseISOString(isoTime).toDateString();
}

export const convertUnixToHumanReadable = (unixTime) => {
  return new Date(unixTime).toDateString();
}
