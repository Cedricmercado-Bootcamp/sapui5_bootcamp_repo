sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    return Controller.extend("exercise1.controller.MainView", {
        onInit() {
        },
    onClear: function() {
        const fields = ["name_field", "streetno1", "streetno2", "zipcocit1", "zipcocit2", "countryfield"];
        fields.forEach(id => {
        const input = this.byId(id);
        if (input) {
        input.setValue("");
                   }
                   });
                   }
    });
});