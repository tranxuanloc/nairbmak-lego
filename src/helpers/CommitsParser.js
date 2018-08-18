var CommitsParser = {};

/**
 * Utils
 */
var filter = function (data) {
  var re = [];
  for (let i = 0; i < data.length; i++) {
    var temp = {
      name: data[i].commit.committer.name,
      date: data[i].commit.committer.date,
      message: data[i].commit.message
    };
    re.push(temp);
  }
  return re;
};

var map = function (data) {
  var re = {};
  for (let i = 0; i < data.length; i++)
    re = reduce(data[i], re);
  return re;
};

var reduce = function (item, rest) {
  var keys = Object.keys(rest);
  for (let i = 0; i < keys.length; i++) {
    if (simplifyDate(new Date(item.date)) === keys[i]) {
      rest[keys[i]].push(item);
      return rest;
    }
  }

  rest[simplifyDate(new Date(item.date))] = [];
  rest[simplifyDate(new Date(item.date))].push(item);
  return rest;
};

var sort = function (data) {
  var result = [];
  var keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    var x = [new Date(keys[i])];
    x = x.concat(data[keys[i]]);
    result.push(x);
  }
  result.sort(function (a, b) { return b[0] - a[0]; });
  return result;
};

// var compareDate = function (a, b) {
//   var _a = simplifyDate(new Date(a));
//   var _b = simplifyDate(new Date(b));
//   return _a === _b;
// };

var simplifyDate = function (date) {
  var month = date.getUTCMonth() + 1;
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();
  return year + '/' + month + '/' + day;
};

/** Main */
CommitsParser.commitsParser = function (data) {
  var re_1 = filter(data);
  var re_2 = map(re_1);
  var re_3 = sort(re_2);
  return re_3;
};

/**
   * Export
   */
module.exports = CommitsParser;
