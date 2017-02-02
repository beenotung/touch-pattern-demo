# touch-pattern-demo
## Prepare
1. run init
```
./init
```
## Test on local browser
```
./run
```
## Test on Android device
```
## using usb
# adb usb  # to make sure adb deamon is running
## wireless alternative
# adb tcpip 5555
# adb connect <ip of android machine>:5555

./run_android
```
