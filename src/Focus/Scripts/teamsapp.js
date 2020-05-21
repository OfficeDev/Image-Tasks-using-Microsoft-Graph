﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

(function () {
  'use strict';

  // Call the initialize API first
  microsoftTeams.initialize();

  // Check the initial theme user chose and respect it
  microsoftTeams.getContext(function (context) {
    if (context && context.theme) {
      setTheme(context.theme);
    }
  });

  // Handle theme changes
  microsoftTeams.registerOnThemeChangeHandler(function (theme) {
    setTheme(theme);
  });

  // Save configuration changes
  microsoftTeams.settings.registerOnSaveHandler(function (saveEvent) {
    // Let the Microsoft Teams platform know what you want to load based on
    // what the user configured on this page
    microsoftTeams.settings.setSettings({
        contentUrl: createTabUrl(), // Mandatory parameter
        entityId: uniqueName() // Mandatory parameter
    });

    // Tells Microsoft Teams platform that we are done saving our settings. Microsoft Teams waits
    // for the app to call this API before it dismisses the dialog. If the wait times out, you will
    // see an error indicating that the configuration settings could not be saved.
    saveEvent.notifySuccess();
  });

  // Logic to let the user configure what they want to see in the tab being loaded
    document.addEventListener('DOMContentLoaded', function () {

        microsoftTeams.settings.setValidityState(true);

        var tabChoice = document.getElementById('tabChoice');
        if (tabChoice) {
          tabChoice.onchange = function () {
            var selectedTab = this[this.selectedIndex].value;

            // This API tells Microsoft Teams to enable the 'Save' button. Since Microsoft Teams always assumes
            // an initial invalid state, without this call the 'Save' button will never be enabled.
            microsoftTeams.settings.setValidityState(selectedTab === 'first' || selectedTab === 'second');
          };
        }
    });

  // Set the desired theme
  function setTheme(theme) {
    if (theme) {
      // Possible values for theme: 'default', 'light', 'dark' and 'contrast'
      //document.body.className = 'theme-' + (theme === 'default' ? 'light' : theme);
    }
  }

  // Create the URL that Microsoft Teams will load in the tab. You can compose any URL even with query strings.
  function createTabUrl() {
    var tabChoice = document.getElementById('tabChoice');
    var selectedTab = tabChoice[tabChoice.selectedIndex].value;

    return window.location.protocol + '//' + window.location.host + '/' + "WorkFlow/Index";

    //return window.location.protocol + '//' + window.location.host + '/' + selectedTab;
  }

    function uniqueName() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
  }

})();

async function sendMessage() {
    btnAnimation();
    var teamId = teamsContext.groupId;
    var channelId = teamsContext.channelId;
    var path = "/teams/" + teamId + "/channels/" + channelId + "/messages";
    var messageContent = $('#Focus_Message_Content').val();
    var message = {
        "body": {
            "content": messageContent
        }
    };
    await graphClientBeta.api(path).post(message);
}

async function sendCard() {
    btnAnimation();
    var teamId = teamsContext.groupId;
    var channelId = teamsContext.channelId;
    var path = "/teams/" + teamId + "/channels/" + channelId + "/messages";
    var messageContent = $('#Focus_Message_Content').val();
    var message = {
        "subject": null,
        "body": {
            "contentType": "html",
            "content": "<attachment id=\"74d20c7f34aa4a7fb74e2b30004247c5\"></attachment>"
        },
        "attachments": [
            {
                "id": "74d20c7f34aa4a7fb74e2b30004247c5",
                "contentType": "application/vnd.microsoft.card.thumbnail",
                "contentUrl": null,
                "content": "{\r\n  \"title\": \"This is an example of posting a card\",\r\n  \"subtitle\": \"<h3>This is the subtitle</h3>\",\r\n  \"text\": \"" + messageContent + " <br>\\r\\nAnd a <a href=\\\"http://microsoft.com/\\\">hyperlink</a>. <br>\\r\\nAnd below that is some buttons:\",\r\n  \"buttons\": [\r\n    {\r\n      \"type\": \"messageBack\",\r\n      \"title\": \"Login to FakeBot\",\r\n      \"text\": \"login\",\r\n      \"displayText\": \"login\",\r\n      \"value\": \"login\"\r\n    }\r\n  ]\r\n}",
                "name": null,
                "thumbnailUrl": null
            }
        ]
    };
    await graphClientBeta.api(path).post(message);
}