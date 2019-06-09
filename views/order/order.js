$(function () {
    // 查找切换
    $(".next-tabs-tab-inner").click(function () {
        $(this).addClass("tabs-tab-inner").siblings().removeClass("tabs-tab-inner")
    })
})