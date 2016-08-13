/*动态计算rem值*/
!(function(win, doc){
    function setFontSize() {
        // 获取window 宽度
        // zepto实现 $(window).width()就是这么干的
        var winWidth =  window.innerWidth;
        // doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px' ;
        // 2016-01-13 订正
        // 640宽度以上进行限制 需要css进行配合
        var size = (winWidth / 750) * 100;/*750为设计搞大小*/
        doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px' ;
    }
    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';  
    var timer = null; 
    win.addEventListener(evt, function () {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);   
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        }
    }, false);
    // 初始化
    setFontSize();
}(window, document));


/****控制input  初始的value 获取失去焦点 显示value值******/
$(function(){ 
     $('#na').bind({ 
          focus:function(){ 
          	 $(this).css('color','#333333')
             if (this.value == this.defaultValue){ 
                  this.value="";
               } 
            }, 
          blur:function(){ 
             if (this.value == ""){ 
                   this.value = this.defaultValue; 
                   $(this).css('color','#d9d9d9')
               } 
            } 
        }); 
        $('#ph').bind({ 
          focus:function(){ 
          	 $(this).css('color','#333333')
             if (this.value == this.defaultValue||this.value==this.value){ 
                  this.value=""; 
               } 
            }, 
          blur:function(){ 
             if (this.value == ""){ 
                   this.value = '请输入手机号'; 
                   $(this).css('color','#d9d9d9')
              }else  if(!/^1[3|4|5|8]\d{9}$/.test(this.value)){
             	   this.value='请输入正确手机号';
             	   $(this).css('color','#d9d9d9')
                }
            } 
    }); 
})


/****点击提交 input value值*****/







/****index页  ajax请求数据绑定****/

//jquery Ajax 请求的参数 用法
//$.ajax({
//	
//	url: url, //请求地址,
//	
//	async:ture,//默认为true 异步请求数据  flase 同步请求
//	
//	type: 'get',//请求方式,
//
//  data:{} ,//传参方式 {} url,
//  
//  cache:true ,//当为true时 会从浏览器缓存中请求数据,
//
//	dataType:'json',//规定请求回来的数据格式,
//	
//	timeout: 5000,//Number	设置请求超时时间（毫秒）。此设置将覆盖全局设置。
//	
//	ifModified:	Boolean	//(默认: false) 仅在服务器数据改变时获取新数据。使用 HTTP 包 Last-Modified 头信息判断
//	
//	 beforeSend: function() {/*请求前的处理*/},
//	
//  success:function(data){/*请求成功调用此函数*/},  
//  
//  complete: function() {/*请求完成的处理*/},
//  
//  error:function(){/*请求失败调用此函数*/},  
//})






