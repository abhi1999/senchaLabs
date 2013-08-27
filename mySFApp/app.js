/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
//<debug>
Ext.Loader.setPath({
  'Ext.force': 'packages/force/src'
});
//</debug>
var OAUTH_REDIRECT_URL = 'http://localhost/senchalabs/mySFApp/index.html';
var CLIENT_ID = "3MVG9A2kN3Bn17husZw71ZAJV9GTUkLotSZHtc8WPAhj3I4y37y9EKhY.kDrP3IPexkyOc4eYgCjHvQp7YVhj";
var force;

Ext.onReady(function() {
  var forceParams = {
      local: {
        clientId: CLIENT_ID,
        redirectUrl: 'http://localhost/senchalabs/mySFApp/index.html'//http://localhost:8888/index.html'
      },
      remote: {
          clientId: CLIENT_ID,
          redurectUrl: 'https://touchsf.heroku.com/index.html'
      }
  },
  mode = window.location.href.indexOf('//localhost') >= 0 ? 'local' : 'remote';

  console.log("Instantiating Force");
  force = Ext.create('Ext.force.Force', {
     clientId: CLIENT_ID,
     proxyUrl: "/proxy/",
  });
  force.authenticate(OAUTH_REDIRECT_URL); // e.g. This is where we'll be redirected back from Force.com after the authentication is complete. It must match what's defined in Force.com in the application's settings. Example: http://localhost:8888/index.html
});

Ext.application({
    name: 'mySFApp',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('mySFApp.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
