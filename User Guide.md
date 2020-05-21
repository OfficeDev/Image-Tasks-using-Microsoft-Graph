# Introduction
Once you have deployed Focus to your environment, this user guide will take you through a step-by-step approach to using the Focus application in Microsoft Teams. The Focus application is a [demo](https://interopevents.blob.core.windows.net/uploads/misc/UsingFocus.mp4) intended to show interoperability with Microsoft Teams and is not a production ready application. 

# Getting Started 
1.  Once you have completed the deployment guide and installed the Focus app, there are 2 options to get started:  
- Option 1: Start by uploading an image to the Files tab in the Teams channel and rename the image “focus.jpg.”   
- Option 2: Start by taking a picture with the device camera in the Focus app  

![Getting Started](https://interopevents.blob.core.windows.net/uploads/misc/Focus/1.png) 

![Kicthen Web Cam](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/Updates/kitchen.png) 

- For the purpose of this demo we uploaded an existing "focus.jpg" image file

2. Draw a selection on the image. Users can draw up to 3 selections. Hover the mouse over a selection to begin taking action on the desired image selection.

![Draw Selection](https://interopevents.blob.core.windows.net/uploads/misc/Focus/2.png)

3. Selection boxes cannot be moved or resized. If an error is made in the selection process or at any point during the user experience within the Focus app, delete the FocusMetadata folder under the Files tab in the Teams channel and refresh the app to start over.

![Focus metadata](https://interopevents.blob.core.windows.net/uploads/misc/Focus/3.png)



In the full Focus [demo](https://interopevents.blob.core.windows.net/uploads/misc/UsingFocus.mp4), we have enabled the demo application with the following actions and features:

# Task Assignment 
The first item in the user menu is task assignment- this can be used to assign team members different tasks. Once the task is created in Focus, you can update and mark tasks as complete in Microsoft Planner. 

![Task Assignment](https://interopevents.blob.core.windows.net/uploads/misc/Focus/4.png)

![Task Assignment 2](https://interopevents.blob.core.windows.net/uploads/misc/Focus/5.png)

# Trigger Flow 
The second item in the user menu triggers flows using Power Automate. This can be used to send inventory details, initiate part approval orders, and trigger any custom flows according to business needs. Each initiated flow will send an update to the chat in the Teams channel.  

![Flow](https://interopevents.blob.core.windows.net/uploads/misc/Focus/6.png)

![Flow 2](https://interopevents.blob.core.windows.net/uploads/misc/Focus/7.png)

# Video Tutorial 
Based on the item selected in the image, the third item in the user menu will populate suggested video tutorials relevant to the item selected.

![Video](https://interopevents.blob.core.windows.net/uploads/misc/Focus/8.png)

# Email 
The fourth item in the user menu allows the user to draft and send email content directly from the Focus app menu to the inbox of the desired recipient(s). 

![Email](https://interopevents.blob.core.windows.net/uploads/misc/Focus/9.png)

![Email 2](https://interopevents.blob.core.windows.net/uploads/misc/Focus/10.png)

# Chat 
The fifth item in the user menu can be used to send a Teams chat message or adaptive card directly to the chat in the Teams channel. 

![Chat](https://interopevents.blob.core.windows.net/uploads/misc/Focus/11.png)

![Chat](https://interopevents.blob.core.windows.net/uploads/misc/Focus/Deployment%20Guide/Updates/6.png) 

# Create Report 
The sixth item in the user menu generates a report of the Teams channel. The report includes all task data from the Teams channel, image(s) of task issues, and charts that include task progress status. The report will be sent directly to the manager and posted as a .xlsx in the Teams channel.

![Generate Report](https://interopevents.blob.core.windows.net/uploads/misc/Focus/12.png)

![Generate Report](https://interopevents.blob.core.windows.net/uploads/misc/Focus/13.png)