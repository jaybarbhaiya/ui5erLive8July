sap.ui.define([], function () {
    "use strict";
    return {
        soldPercentState: function(fSoldPercent) {
            if (fSoldPercent <= 25) {
                return "Error";
            } else if (fSoldPercent > 25 && fSoldPercent <= 70) {
                return "Warning";
            } else {
                return "Success";
            }
        }
    };
});
