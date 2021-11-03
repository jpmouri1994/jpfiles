/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comfirstprogram./firstprogram/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
