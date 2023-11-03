function main() {
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

			// 静态方法就更简单了，直接Demo.fun就行了！！！
		}

	);
}


setTimeout(main());