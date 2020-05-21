# Introduction
This document will guide you to deploy Focus to your environment. 

# Prerequisites 
- Install Visual Studio With IIS express (With ASP.NET and WEB Development checked)
- Install [.Net Framework 4.7.2](https://dotnet.microsoft.com/download/thank-you/net472-developer-pack) dev pack
- Install [Ngrok](https://ngrok.com/download)
- M365 Tenant admin account

# Step 1 - Set up Teams

## Set up a group in the M365 admin center
1. Login to portal.azure.com with your admin tenant account
2. Navigate to Azure Active Directory > Groups

![Azure Active Directory](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/Updates/MicrosoftTeams-image%20(6).png)

![Azure AD](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/Updates/3.png)

3. Create a new Office 365 group

![Office 365 Group](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/Updates/4.png)

![Office 365 Group](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/Updates/5.png)

4. Assign your admin account as an owner and add five other Office 365 accounts as members

## Create a Teams team
1.	Login to Microsoft Teams and select the web app option for debugging
2.	Create a team from the previous Office 365 group

![Create Team](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/3.png)

![Create Team](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/4.png)

![Create Team](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/5.png)

![Create Team](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/6.png)

![Create Team](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/7.png)

## Create a Teams channel
1.	Create a Teams channel for the Focus app

![Create channel](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/8.png)

![Create channel](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/9.png)

2.	Upload any image into the channel files and rename the image file to "Focus.jpg"

![Focus](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/10.png)

# Step 2 - Set up Focus App
## Set up the Focus app inside the Teams channel created in Step 1

## Hook up Ngrok with Focus app code
1.	Build and run your Teams App with VisualStudio
2.	Download Ngrok (if you haven't already)
3.	Start Ngrok to create an externally addressable URL for the Focus app:
  - Open your terminal or CommandLine and cd to your Ngrok folder
  - Ngrok http 60790 --host-header=localhost:60790
  - Replace the port number as needed

![Focus](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/11.png)

## Register the Focus App in Azure
1.	Login to the Azure portal with the admin account
2.	Register the Focus App

![Azure](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/12.png)
![Azure](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/13.png)

![Azure](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/14.png)

  - Select the multi-tenant option and add the redirect URL https://****.ngrok.io/WorkFlow/EndAuth, replace those stars with the real Ngrok URL generated in the last step

![Ngrok](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/15.png)

3.	Add the API permissions for this app

![API](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/16.png)

![API](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/17.png)

![API](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/18.png)

![API](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/19.png)

![API](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/20.png)

  - Make sure to select all required permissions, you will have to search those permissions one-by-one and check them 

![Perms](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/21.png)

  - Grant admin consent

![Admin](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/22.png)

4.	Implicit grant token and Save

![Grant Token](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/23.png)

![Grant Token](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/24.png)

![Grant Token](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/25.png)

## Install the Focus App to Teams channel
1.	Switch to the source code, update the content of scripts/config.js, replace the g_appId with client id as shown in below image

![Install Focus](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/Updates/focus%20config.jpg) 

2. Open scripts/config.js update cognitive service vision service Url and speech service Url and related subscription key. Follow [computer vision document](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/quickstarts/javascript-analyze) and [speech service document](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/rest-speech-to-text). 

3. Open scripts/FlowCalls.js update checkInventory flow request Url and startApproval flow request Url. Follow [this document](https://docs.microsoft.com/en-us/azure/connectors/connectors-native-reqres).

4.	Update the content of Manifest/manifest.json, update "configurationUrl","contentUrl","websiteUrl","validDomains" with the Ngrok URL

![Update manifest](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/27.png)

5.	Zip Manifest/icon.png and Manifest/manifest.json
6.	Switch back to the Teams application, upload the app zip to Teams and check it in Built for Contoso


![Upload app zip](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/28.png)

![Upload app zip](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/29.png)

7.	Add the Focus app into the Teams channel

![Focus to channel](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/30.png)

![Focus to channel](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/31.png)

![Focus to channel](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/32.png)

![Focus to channel](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/33.png)

8.	You should be able to see the Focus app now

  - Please unblock the pop up window or the authentication process will be blocked

![Focus in app](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/34.png)

The Focus app should now be deployed to your environment. For how to use the tool, view [Focus user guide](User%20Guide.md).   