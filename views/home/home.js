
// 复用

// var conf = {
//     serverHost : 'http://192.168.2.254:9000/'
// }

// var _mm = {
//     request : function (param) {
//         // 网络请求处理
//         $.ajax({
//             type     : param.type       ||   "get",
//             url      : param.url        ||   "",
//             dataType : param.dataType   ||   "json",
//             data     : param.data       ||   "",
//             success  : function (res) {
                
//             },
//             error     :  function (err) {
//                 typeof param.error === "function" && param.error(err.statusText);
//             }
            
//         })
//     },
// }


// $(".box").click(function () {
//     user.login({
//         da : 123,
//         si : 456
//     },function (data) {
        
//     })
// })