// 轮播图
$(function () {
    jQuery("#slider-3 .slider").slide({ mainCell: ".bd ul", titCell: ".hd li", trigger: "click", effect: "leftLoop", autoPlay: true, delayTime: 700, interTime: 2500, pnLoop: false, titOnClassName: "active", mouseOverStop: false })

    // 当鼠标移入 展开二级菜单  // 关闭菜单
    $(document).on("mouseover",".first-item",function() {
        $(this).children(".rw-lst-header-nav-second").css("display","block")
    })

    $(document).on("mouseout",".first-item",function() {
        $(this).children(".rw-lst-header-nav-second").css("display","none")
    })
});

























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