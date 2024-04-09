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
                // 2) Create JSON model from the view side
                // data comes from the manofest
                // first define a constractor to the JSOM model => new sap.ui.model.json.JSONModel(oData?, bObserve?)
                var oJSONModel = new sap.ui.model.json.JSONModel();
                // Then set this model, setModel() takes two parameters, model instance and model name
                // setting local model to controller and view
                this.getView().setModel(oJSONModel, "LocalJSONModel");
                // setting global model on component level
                this.getOwnerComponent().setModel(oJSONModel, "GlobalJSONModel");


            },

            getJSONModel: function() {
                // 1) we get instance of the model from manifest
                // with the method getOwnerComponent, we will get instance of the component
                // We get the constructor of JSON model, inside this there is oData which has ProductCollection
                // this.getOwnerComponent
                // this.getOwnerComponent().getModel('ProductJSONModel')
                // this.getOwnerComponent().getModel('ProductJSONModel').getData()
                // getData will return the data from model. 

                //var oModel = this.getOwnerComponent().getModel('ProductJSONModel').getData()
                var oModel = this.getOwnerComponent().getModel('ProductJSONModel');
                // Next I want to set a new property,  I want to provide a new property inside the object
               
                oModel.setProperty("/SampleProperty", {Name: 'Coskun', Age: '34', Gender: 'Female'});

                // get property data from model
                var myNewData = oModel.getProperty("/SampleProperty");
                console.log(myNewData)

                // get entire data from model
                // After changing the text tags with input tags, we can enter a new property and then we can see that we get this new property.
                var myAllData = oModel.getData();
                console.log(myAllData)

            }
        });
    });
