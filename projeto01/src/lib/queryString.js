const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw Error('Please check your params.');
  }

  return `${key}=${value}`;
};

export function queryString(object) {
  return Object.entries(object).map(keyValueToString).join('&');
}

export function parser(string) {
  return Object.fromEntries(
    string.split('&').map(item => {
      let [key, value] = item.split('=');

      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }

      return [key, value];
    }),
  );
}
