'use strict';

var isStart = true;

module.exports = function () {

    this.setDefaultTimeout(60000);

    this.After(function () {
        var _this = this;
        return _this.browserUtils.returnToMainWindow()
            .then(function(){
                return _this.browserUtils.clearLocalStorage();
            });
    });

};