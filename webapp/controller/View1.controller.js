sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.firstprogram.firstprogram.controller.View1", {
			onInit: function () {

            },
            Clickme: function () {
                alert ("Hello world");
            }
		});
	});
