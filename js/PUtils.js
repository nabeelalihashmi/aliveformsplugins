window.PUtils = function () {
    this.init = function () {

    };

    this.OptionsToString = function () {
        str = $.ScreenTitle(screen) + "\r\n";
        let scr = $.HackForm(screen);
        let scrOpts = scr.o.map(item => item.t);
        str += formatter.format(scrOpts);
        return str;
    }
};
