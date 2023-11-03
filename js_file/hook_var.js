function hook_value(){
	console.log("js loaded successfully!!");
	Java.perform(
		function(){
			let Demo = Java.use("com.zj.wuaipojie.Demo");
			Java.choose("com.zj.wuaipojie.Demo", {
				onMatch:function(instance){
					// static var（可以是private或者public
					console.log("static var:" + instance.Tag);
					// 成员变量（可以是private或者public
					console.log("成员 var:" + instance.privateInt);
					
				},
				onComplete:function(){

				}
			})
		}

	);
}

setTimeout(getValue());


