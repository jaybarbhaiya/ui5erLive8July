sap.ui.define([
    "com/myorg/myEasyUI5App/controller/BaseController",
    "sap/ui/model/json/JSONModel"
], function (
    Controller,
    JSONModel
) {
    "use strict";

    return Controller.extend("com.myorg.myEasyUI5App.controller.MainView", {
        onInit: function() {
            var aData = [{
                "ProductName": "PC",
                "ProductCode": "PD-101",
                "Sold": "500",
                "Produced": "750",
                "Unit": "PCS",
                "SoldPercent": 66.667,
                "SoldPercentUnit": "%"
            }, {
                "ProductCode": "PD-102",
                "ProductName": "Keyboard",
                "Sold": "380",
                "Produced": "400",
                "Unit": "PCS",
                "SoldPercent": 95,
                "SoldPercentUnit": "%"
            }, {
                "ProductCode": "PD-103",
                "ProductName": "Mouse",
                "Sold": "320",
                "Produced": "750",
                "Unit": "PCS",
                "SoldPercent": 42.667,
                "SoldPercentUnit": "%"
            }, {
                "ProductCode": "PD-104",
                "ProductName": "Chair",
                "Sold": "200",
                "Produced": "800",
                "Unit": "PCS",
                "SoldPercent": 25,
                "SoldPercentUnit": "%"
            }, {
                "ProductCode": "PD-105",
                "ProductName": "Table",
                "Sold": "150",
                "Produced": "550",
                "Unit": "PCS",
                "SoldPercent": 27.273,
                "SoldPercentUnit": "%"
            }, {
                "ProductCode": "PD-106",
                "ProductName": "Headsets",
                "Sold": "850",
                "Produced": "1000",
                "Unit": "PCS",
                "SoldPercent": 85,
                "SoldPercentUnit": "%"
            }, {
                "ProductCode": "PD-107",
                "ProductName": "Speakers",
                "Sold": "997",
                "Produced": "1200",
                "Unit": "PCS",
                "SoldPercent": 83.083,
                "SoldPercentUnit": "%"
            }];

            var oModel = new JSONModel();
            oModel.setData(aData);

            this.getView().setModel(oModel);
        },

        onPopinChanged: function(oEvent) {
            var oTogglePopinButton = this.byId("togglePopin");

            if (oEvent.getParameter("hiddenInPopin").length ||
                oEvent.getParameter("visibleInPopin").some(function(oColumn) {
                    return oColumn.getImportance() == "Low";
                })) {
                    oTogglePopinButton.setVisible(true);
            } else {
                oTogglePopinButton.setVisible(false);
            }
        },

        onTogglePopin: function(oEvent) {
            var oTable = this.byId("myTable");
            var oButton = oEvent.getSource();
            if (oButton.getText() == "Show popins") {
                oTable.setHiddenInPopin();
                oButton.setText("Hide popins");
            } else {
                oTable.setHiddenInPopin(["Low"]);
                oButton.setText("Show popins");
            }
        }
    });
});
