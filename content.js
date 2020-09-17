chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'newTab') {
        clickIfDefined($("#aui-flag-container > div:nth-child(1) > div > span"));
        clickIfDefined($("#nps-acknowledgement-accept-button"));
        clickIfDefined($("#inline-dialog-post-setup-announcement-database-setup > div.aui-inline-dialog-contents.contents > div > p.post-setup-discovery-buttons > a.aui-button.post-setup-action.post-setup-action-js.post-setup-discovery-close-js"));
        clickIfDefined($("#inline-dialog-jira-help-tip-15539905126670 > div.aui-inline-dialog-contents > form > button"));
        clickIfDefined($('#aui-flag-container > div.aui-flag > div.aui-message > button.aui-close-button'));
    }
});

function clickIfDefined(element) {
    if(element !== undefined) {
        element.click();
    }
}
