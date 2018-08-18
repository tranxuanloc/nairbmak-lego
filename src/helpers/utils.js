export default {
  getContentFromUrl: (url) => {
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    return request.responseText;
  },

  csvToJSON: (csv) => {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return JSON.stringify(result).replace(/\\n|\\r/g, ""); //JSON
  },

  charLimiter: (str, length, ending) => {

    // TODO: check str must be a string, length must be an unsigned int, ending must be a string. Use try catch
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }
};