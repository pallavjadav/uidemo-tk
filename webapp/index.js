sap.ui.define([  //known as scaffolding template
    "sap/m/Text",
    "sap/m/Input"
], (Text, Input) => {
	"use strict";
	new Input({
        value: "My App"
    }).placeAt("content");
});