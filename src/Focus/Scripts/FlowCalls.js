// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

function checkInventory() {
    console.log("check inventory clicked");
    $.ajax({
        type: 'POST',
        data: JSON.stringify({ "TeamId": teamsContext.groupId, "ChannelId": teamsContext.channelId, "Tag": tagFromRect}),
        contentType: "application/json",
        dataType: 'json',
        url: '', // todo checkInventory flow request Url
        success: function (data) {
            console.log("checkInventory : Flow success");
        }
    });
}

function startApproval() {
    console.log("startApproval clicked");
    $.ajax({
        type: 'POST',
        contentType: "application/json",
        dataType: 'json',
        data: JSON.stringify({ "TeamId": teamsContext.groupId, "ChannelId": teamsContext.channelId, "Tag": tagFromRect }),
        url: '', // todo startApproval flow request Url
        success: function (data) {
            console.log("startApproval : Flow success");
        }
    });
}

function TriggerFlows() {
    console.log("Tigger flows");
    btnAnimation();
    if ($("#ck_flow_inventory").prop("checked") === true) {
        checkInventory();
    }

    if ($("#ck_flow_approval").prop("checked") === true) {
        startApproval();
    }
}