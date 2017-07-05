cordova.define('cordova/plugin_list', function(require, exports, module) {
              module.exports = [
                                {
                                "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
                                "id": "org.apache.cordova.inappbrowser.inappbrowser",
                                "clobbers": [
                                             "window.open"
                                             ]
                                },
                                {
                                "file": "plugins/org.apache.cordova.file-transfer/www/FileTransfer.js",
                                "id": "org.apache.cordova.file-transfer.file-transfer"
                                },
                                {
                                "file": "plugins/org.apache.cordova.file/www/File.js",
                                "id": "org.apache.cordova.file.file"
                                }
                                ];
              module.exports.metadata = 
              // TOP OF METADATA
              {
              "org.apache.cordova.inappbrowser": "0.5.2"
              }
              // BOTTOM OF METADATA
              });