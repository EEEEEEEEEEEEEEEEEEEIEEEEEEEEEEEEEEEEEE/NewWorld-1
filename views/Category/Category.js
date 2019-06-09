$(document).ready(function () {
    // 模块化格式
    var tabulation = (function () {
        // 展开一级菜单 1
        function areveal () {
            $(".rw-lst-header-nav-fixed-header").stop(true,true).slideDown("slow");
        }
        // 收起一级菜单 2
        function shut () {
            $(".rw-lst-header-nav-fixed-header").stop(true,false).slideUp("slow");
        }
        return {
            areveal  :  areveal,     //展开一级菜单 1
            shut     :  shut         //收起一级菜单 2
        }
    })

    var category = tabulation();  // 创建模块化闭包

    


    // 当鼠标移入 展开 / 收起 一级菜单  1 / 2
    $(".rw-lst-header-nav-header").hover(function () {
        category.areveal()      //展开  
    },function () {
        category.shut()         //收起  
    })




    
    
// 分页插件

function getParameter(name) { 
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) return unescape(r[2]); return null;
}

//init
$(function(){
	var totalPage = 30;				//总页码
	var totalRecords = 1;			//条码数
	var pageNo = getParameter('pno');		//获取窗口id
	if(!pageNo){
		pageNo = 1;
	}
	//生成分页
	//有些参数是可选的，比如lang，若不传有默认值
	kkpager.generPageHtml({
		// 窗口id
		pno : pageNo,
		//总页码
		total : totalPage,
		//总数据条数
		totalRecords : totalRecords,
		mode : 'click',
		click : function(n){
			console.log(n)
			//手动选中按钮
			this.selectPage(n);
			return false;
		}
	});
});

})
