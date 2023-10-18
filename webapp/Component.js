sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
	"use strict";
	return UIComponent.extend("com.vaibhavmojidra.componentdemo.Component", {
		metadata: {
			"interfaces": ["sap.ui.core.IAsyncContentCreation"],
			"rootView": {
				"viewName": "com.vaibhavmojidra.componentdemo.view.App",
				"type": "XML",
				"id": "app"
			}
		},
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
			var oData = {
				name: "Vaibhav"
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
		}
	});
});