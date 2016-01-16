# com.rays.notification
A simple drop down notification widget for Titanium

##How to use the widget
* Download com.rays.notification
* Unzip the folder to your project(app/widgets/com.rays.notification)
* Add com.rays.notification as a dependency to your projects app/config.json
    ```javascript
    "dependencies": {
    	  "com.rays.notification": "1.0"
    }
    ```

* Create a global instance to access the notification widget anywhere in your project and provide your main window as parameter:
    ```javascript
      Alloy.Globals.notification = Alloy.createWidget("com.rays.notification", {
                                      index: $.index
                                   });
                                   
      or
      
      var win = Ti.UI.createWindow({
                backgroundColor : '#fff',
            });
      win.open();
      
      Alloy.Globals.notification = Alloy.createWidget("com.rays.notification", {
                                      index: win
                                   });
    ```
    
* Show the notification, provide the message and the style of notification
    ```javascript
        Alloy.Globals.notificaiton.show({
            message: "Hello World!",
            style: 'success'
        });
    ```

* Changing the style will change the color of the notification: success, error, warning, info

* Hide the notification:
    ```javascript
        Alloy.Globals.notificaiton.hide();
    ```
    
* Customize the properties of the notification. Just include it on show function as parameter:
    - message
    - duration: the length on how fast the notification will drop down and go up
    - animationDuration: the length on how long the notification will stay before going up
    - style: style of notification(success, error, warning, info)
    - bgColor: changes the background color of the notification
    - fontColor: changes the font color of the text in the notification
    - height: changes the height of the notification
    - persistent: (true/false) set to true if you want the notification to stay and not go up

    ```javascript
        Alloy.Globals.notificaiton.show({
            message: "Hello World!",
            style: 'success',
            duration: 500,
            animationDuration: 1000,
            persisten: true
        });
    ```


##License
Copyright 2015 Ray Saavedra

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
