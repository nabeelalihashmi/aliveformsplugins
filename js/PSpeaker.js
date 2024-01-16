window.PSpeaker = function () {
    this.speak = function (str) {
        let utterThis = new SpeechSynthesisUtterance(str)
        window.speechSynthesis.speak(utterThis)
    }
};
