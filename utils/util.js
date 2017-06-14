var md5 = require('../assets/js/md5/md5.js');

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function array2unicode(arr) {
  return arr.map(function (s) {
    // 先转为字符串
    s = String(s);
    // 字符串拆分字符
    var chars = s.split('');
    // 将每个字符转为 unicode 编码
    return chars.map(function (c) {
      return c.charCodeAt(0);
    });
  });
}

module.exports = {
  formatTime: formatTime,
  array2unicode: array2unicode,
  md5:md5
}
