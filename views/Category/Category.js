// 当鼠标移入 展开二级菜单 关闭菜单
$(document).on("mouseover",".rw-lst-header-nav-header",function () {
    $(".rw-lst-header-nav-fixed-header").stop(true,false).slideDown("slow");
    console.log(1)
})

$(document).on("mouseout",".rw-lst-header-nav-header",function () {
    $(".rw-lst-header-nav-fixed-header").stop(true,false).slideUp("slow");
    console.log(2)
})


