let bear = 0, hasSendPhone = 0, wechat = 0
interactive.init('greatbear')
// cookie 初始化
function getCookie(objName) {//获取指定名称的cookie的值
  var arrStr = "" + document.cookie;
  if (!arrStr) {
    return "";
  }
  arrStr = arrStr.split(";");
  if (arrStr.length > 0) {
    var target = '';
    for (var i = 0; i < arrStr.length; i++) {
      var temp = arrStr[i].split("=");
      var name = temp[0].replace(/^\s+|\s+$/g, "");
      if (name == objName) {
        target = temp[1];
      }
    }
    return target
  }
  return ""
}

function setCookie(objName, objValue, objHours) {
  var str = objName + "=" + objValue;
  if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
    var date = new Date();
    var ms = objHours * 3600 * 1000;
    date.setTime(date.getTime() + ms);
    str += "; expires=" + date.toGMTString();
  }
  document.cookie = str;
}

function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval && cval !== null && cval !== 'undefined') {
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
}

function openBear(e) {
  console.log('打开大熊会话')
  interactive.openGreatBear(e, "") 
}
