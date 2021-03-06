var pauseVideo = function(){
    if(document.getElementsByClassName("ytp-play-button").length > 0)
        document.getElementsByClassName("ytp-play-button")[0].click();
        return "paused";
};

var playVideo = function(){
    if (document.getElementsByClassName("ytp-play-button").length > 0)
        document.getElementsByClassName("ytp-play-button")[0].click();
        return "play";
};

var messageToActionMap = {
    pause: pauseVideo,
    play: playVideo
};

window.addEventListener("load", function(event) {
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            var status = messageToActionMap[request.action]();
            sendResponse({status: status});
        }
    );
});
