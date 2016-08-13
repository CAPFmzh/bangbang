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
