const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw Error('Please check your params.');
  }

  return `${key}=${value}`;
};

module.exports.queryString = object =>
  Object.entries(object).map(keyValueToString).join('&');
