//定义一个名为hookTest1的函数
function hookTest1(){
	//获取一个名为"类名"的Java类，并将其实例赋值给JavaScript变量utils
	var utils = Java.use("com.zj.wuaipojie.Demo");
	//修改"类名"的"method"方法的实现。这个新的实现会接收两个参数（a和b）
	utils.a.implementation = function(str){
	//将参数a和b的值改为123和456。
	// a = 123;
	// b = 456;
	str = "很厉害"
	//调用修改过的"method"方法，并将返回值存储在`retval`变量中
	var retval = this.a(str) + "???";
	//在控制台上打印参数a，b的值以及"method"方法的返回值
	console.log(str, retval);
	//返回"method"方法的返回值
	return retval;
}
}

//定义一个名为hookTest1的函数
function hookTest2(){
	//获取一个名为"类名"的Java类，并将其实例赋值给JavaScript变量utils
	var utils = Java.use("com.zj.wuaipojie.Demo");
	//修改"类名"的"method"方法的实现。这个新的实现会接收两个参数（a和b）
	utils.Inner.overload("com.zj.wuaipojie.Demo$Animal","java.lang.String").implementation = function(animal,str){
	//将参数a和b的值改为123和456。
	// a = 123;
	// b = 456;
	str = str + "很厉害"
	//调用修改过的"method"方法，并将返回值存储在`retval`变量中
	this.Inner(animal,str);
	//在控制台上打印参数a
	console.log(str);
	
}
}

// 脚本的入口点，所有的操作都将从这里开始。
function main(){
	Java.perform(function(){
		hookTest2();
	})
}

// setImmediate的主要作用是在当前事件循环的末尾立即执
// 行指定的函数，而不需要指定延迟时间。这使它成为一种
// 非常有用的工具，用于确保在其他异步操作之后执行特定
// 的任务，而不会引入不必要的延迟。
setImmediate(main);



function main(){
	console.log()
}