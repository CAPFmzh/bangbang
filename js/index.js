/*动态计算rem值*/
!(function (win, doc) {
    function setFontSize() {
        // 获取window 宽度
        // zepto实现 $(window).width()就是这么干的
        var winWidth = window.innerWidth;
        // doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px' ;
        // 2016-01-13 订正
        // 640宽度以上进行限制 需要css进行配合
        var size = (winWidth / 750) * 100;
        /*750为设计搞大小*/
        doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
    }

    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
    var timer = null;
    win.addEventListener(evt, function () {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);
    win.addEventListener("pageshow", function (e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        }
    }, false);
    // 初始化
    setFontSize();
}(window, document));


/****控制input  初始的value 获取失去焦点 显示value值******/
$(function () {
    $('#na').bind({
        focus: function () {
            $(this).css('color', '#333333')
            if (this.value == this.defaultValue) {
                this.value = "";
            }
        },
        blur: function () {
            if (this.value == "") {
                this.value = this.defaultValue;
                $(this).css('color', '#d9d9d9')
            }
        }
    });
    $('#ph').bind({
        focus: function () {
            $(this).css('color', '#333333')
            if (this.value == this.defaultValue || this.value == this.value) {
                this.value = "";
            }
        },
        blur: function () {
            if (this.value == "") {
                this.value = '请输入手机号';
                $(this).css('color', '#d9d9d9')
            } else if (!/^1[3|4|5|8]\d{9}$/.test(this.value)) {
                this.value = '请输入正确手机号';
                $(this).css('color', '#d9d9d9')
            }
        }
    });
})


/****点击提交 input value值*****///以下代码是判断input  value值的  
function submit() {
    var myform = document.querySelector('#form');
    var btn = document.getElementById('submit');

    function serializable(myform) {
        //我们要序列化myform表单
        myform.elements //所有的表单元素
        //DOM集合 是类数组
        var result = []
        var arr = Array.prototype.slice.call(myform.elements);
        arr.forEach(function (item) {
            if (item.type == 'text' || item.type == 'tel') {
                //将数表单的键和值通过=拼接放到数组内
                if (item.value == item.defaultValue || item.value == '') {
                    return
                }
                result.push(item.name + '=' + item.value);
            }
        });
        return result.join('&');
    };
    var name = document.getElementById('na');
    var ph = document.getElementById('ph');
    btn.addEventListener('click', function () {//点击提交判断 value是否输入值
        if ((name.value == '' || name.value == '请输入姓名') && (ph.value == '' || ph.value == '请输入手机号')) {
            alert('姓名 手机号不能为空');
            //return;
        } else {
            if (name.value == '' || name.value == '请输入姓名') {
                alert('姓名不能为空');
                return;
            }
            if (ph.value == '' || ph.value == '请输入手机号') {
                alert('手机号不能为空');
                return;
            }
        }
         if (!/^1[3|4|5|8]\d{9}$/.test(ph.value)) {
                this.value = '请输入正确手机号';
                $(this).css('color', '#d9d9d9')
            }
        if ( (name.value != '请输入姓名' && ph.value != '请输入手机号')&&(name.value != '' && ph.value != '') ) {
            
            $('.tishi').css('display', 'block');// 报名成功显示提示
            $(function none () {//提示框消失
    			$('.tishi>div').on('click',function  () {
    				$('.tishi').css('display','none');
    				name.value = '请输入姓名';
                	ph.value = '请输入手机号';
                	if (name.value == '请输入姓名' || ph.value == '请输入手机号') {
                    	$('input').css('color', '#d9d9d9');
                	}
    			})
			})
        }
        //点击提交发送数据
        function TOjson(str){
        	return  "JSON" in window?JSON.parse(str):eval("("+str+")");
        }
        var xhr = new XMLHttpRequest();
        //post请求 发送给服务器端
        xhr.open('post', '/reg', true);
        xhr.responseType = 'json'; //设置响应回来的数据就是json格式
        xhr.onreadystatechange=function(){
        	if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
        		var data=xhr.responseText;
        		data=TOjson(data);
        		
        	}
        }
        var json = serializable(myform);
        xhr.send(json); //send里放字符串
    }, false);
}










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






