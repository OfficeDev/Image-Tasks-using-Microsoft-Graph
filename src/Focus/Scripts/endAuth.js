﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

microsoftTeams.initialize();
//microsoftTeams.appInitialization.notifyAppLoaded();

localStorage.removeItem("simple.error");


let hashParams = getHashParameters();
if (hashParams["error"]) {
    // Authentication/authorization failed
    localStorage.setItem("simple.error", JSON.stringify(hashParams));
    microsoftTeams.authentication.notifyFailure(hashParams["error"]);
} else if (hashParams["access_token"]) {
    // Get the stored state parameter and compare with incoming state
    let expectedState = localStorage.getItem("simple.state");
    if (expectedState !== hashParams["state"]) {
        // State does not match, report error
        localStorage.setItem("simple.error", JSON.stringify(hashParams));
        microsoftTeams.authentication.notifyFailure("StateDoesNotMatch");
    } else {
        // Success -- return token information to the parent page
        microsoftTeams.authentication.notifySuccess({
            idToken: hashParams["id_token"],
            accessToken: hashParams["access_token"],
            tokenType: hashParams["token_type"],
            expiresIn: hashParams["expires_in"]
        });
    }
} else {
    // Unexpected condition: hash does not contain error or access_token parameter
    localStorage.setItem("simple.error", JSON.stringify(hashParams));
    microsoftTeams.authentication.notifyFailure("UnexpectedFailure");
}

// Parse hash parameters into key-value pairs
function getHashParameters() {
    let hashParams = {};
    location.hash.substr(1).split("&").forEach(function (item) {
        let s = item.split("="),
            k = s[0],
            v = s[1] && decodeURIComponent(s[1]);
        hashParams[k] = v;
    });
    return hashParams;
}