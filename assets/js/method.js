
//cookie 对象
var cookie = {

    //写入cookie
    setCookie: function (name, value, expires) {
        var Days = expires;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" +escape(value) + ";expires=" +exp.toGMTString(); 
    },

    //读取cookie
    getCookie: function (name) {
        var strCookie = document.cookie;
        //将多个cookie切割为多个名/值对
        var arrCookie = strCookie.split(";");
        var result;

        for (var i = 0; i < arrCookie.length; i++) {
            var arr = arrCookie[i].split("=");
            if (name == arr[0]) {
                result = arr[1];
                break;
            } else {
                result = null;
            }
        }
        return result;
    },
    //删除cookie
    delCookie: function (name) {
        var date = new Date();
        date.setTime(date.getTime() - 10000);
        document.cookie = name + "=;expires=" + date.toGMTString();
    }

}








