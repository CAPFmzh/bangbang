//
$(function(){
     $('#na'/*元素*/).bind({ 
          focus:function(){ 
             if (this.value == this.defaultValue){ 
                  this.value=""; 
                } 
                $(this).css('color','#000')
            }, 
          blur:function(){ 
             if (this.value == ""){ 
                   this.value = this.defaultValue; 
                   $(this).css('color','#EDEDED')
               } 
            } 
       }); 
})

/*原生js 版*/
function loseAn(ele){
	window.onload = function() {
		//搜索name为keyWord的DOM对象
	    var keyWord = document.getElementsByName(ele);   
	    //获得焦点
	    
	    keyWord.onfocus = function() {
	    	this.style.color='#000'
	    	if (this.value == this.defaultValue){ //判断获得焦点时的value值 与 最开始的value是否一样
	                  this.value=""; 
	              } 
	    };
	    //失去焦点
	    keyWord.onblur = function() {
	    	if (this.value == ""){  //判断获得失去焦点时value是都有值
	                   this.value = this.defaultValue; 
	                   this.style.color='#ededed'
	              } 
	    };
	}
}



/*验证手机号*/
function yanzheng(ele){
	ele.onblur = function() { 
    			var reg=/^1[3|4|5|8]\d{9}$/
                if(reg.test(this.value)){
                  	console.log(reg.test(this.value))
                  	this.value = this.value; 
                }else{
                  	this.style.color='#d9d9d9'
                  	this.value='请输入正确手机号'
                }
              
    	};
}



/***jquery Ajax 请求的参数 用法****/
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





