function getCurrentDate() {
  const date = new Date();
  return date.toDateString();
}

module.exports = getCurrentDate;
