import frida, sys, os

appPacket = "wuaipojie"

def on_message(message, data):
	if message["type"] == 'send':
		print("[*] {0}".format(message['payload']))
	else:
		print(message)

device = frida.get_usb_device()
process = device.attach(appPacket)

with open(os.path.join('..//js_file//work_with_python.js'),'r',encoding="utf-8") as f:
	jscode = f.read()

script = process.create_script(jscode)


# 注册自己的消息对应函数，每当javascript想要使用console进行输出时，都会经过这里指定的on_message方法执行
script.on('message',on_message)
script.load()

command = ""
while True:
	command = input("""
Enter command:
1:Exit
2:Call hook var
3:Call hook function
""")
	if command == "1":
		break
	elif command == "2":
		# 通过 exports方法访问我们，在javascript中定义的导出名
		script.exports.hvar()
	elif command == "3":
		script.exports.hfun()
	else:
		break
