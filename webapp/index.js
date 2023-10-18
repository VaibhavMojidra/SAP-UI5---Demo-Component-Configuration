sap.ui.define([
		"sap/ui/core/ComponentContainer"
	],
	function(ComponentContainer) {
		"use strict";

		new ComponentContainer({
			name: "com.vaibhavmojidra.componentdemo",
			settings: {
				id: "componentdemo"
			},
			async: true
		}).placeAt("content");
	}
);