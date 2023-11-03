function hook_function() {
	console.log("js loaded successfully!!");
	Java.perform(
		function () {
			let Demo = Java.use("com.zj.wuaipojie.Demo");

			//  对象方法使用 !!!
			// 首先使用chooseAPI来从内存中获取对象！！！
			Java.choose("com.zj.wuaipojie.Demo", {
				onMatch: function (instance) {
					console.log("instance is found!!!");
					let ret = instance.a("很牛逼的");
					console.log(ret);
				},
				onComplete: function () {
					console.log("search is completed!!");
				}
			});

		}

	);
}

function hook_value() {
	console.log("js loaded successfully!!");
	Java.perform(
		function () {
			let Demo = Java.use("com.zj.wuaipojie.Demo");
			Java.choose("com.zj.wuaipojie.Demo", {
				onMatch: function (instance) {
					// static var（可以是private或者public
					console.log("static var:" + instance.Tag);
					// 成员变量（可以是private或者public
					console.log("成员 var:" + instance.privateInt);

				},
				onComplete: function () {

				}
			})
		}

	);
}


rpc.exports = {
	hvar: hook_value,
	hfun: hook_function,
}

setTimeout(main());