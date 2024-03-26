/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gcos_model_binding/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
