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
      Alloy.Globals.Messages.show({
          message: "Hello World!",
          style: 'success'
      });
    ```

* Changing the style will change the color of the notification: success, error, warning, info
* Hide the notification:
    ```javascript
      Alloy.Globals.Messages.hide();
    ```
