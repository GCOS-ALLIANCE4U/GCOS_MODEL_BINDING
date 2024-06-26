/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "gcosmodelbinding/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("gcosmodelbinding.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                // set json model which has been created in the model.js
                // but this is not necessary because we did it in manifest
                // this.setModel(models.createProductJSONModel(), "ProductJSONModel");
            }
        });
    }
);