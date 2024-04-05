sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("gcosmodelbinding.controller.Product", {
            onInit: function () {

            },

            getJSONModel: function() {
                // we get instance of the model from manifest
                // with the method getOwnerComponent, we will get instance of the component
                // We get the constructor of JSON model, inside this there is oData which has ProductCollection
                // this.getOwnerComponent
                // this.getOwnerComponent().getModel('ProductJSONModel')
                // this.getOwnerComponent().getModel('ProductJSONModel').getData()
                // getData will return the data from model. 
                var oModel = this.getOwnerComponent().getModel('ProductJSONModel').getData()
            }
        });
    });
