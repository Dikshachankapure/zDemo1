sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
], function (Controller,History,JSONModel,Filter) {
	"use strict";

	return Controller.extend("demo.zDemo1.controller.View1", {
		onInit: function () {
			var oModelsales = this.getOwnerComponent().getModel();
			this.getView().setModel(oModelsales);
		},
		_getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onSearch: function (oEvent) {
			var query1 = this.getView().byId("reqNo1").getValue();
			var query2 = this.getView().byId("salesorg1").getValue();
			var oFilter1, oFilter2;
			var allFilter = "";
			if (query1.length > 0 && query2.length > 0) {
				oFilter1 = new sap.ui.model.Filter("Mandt", sap.ui.model.FilterOperator.EQ, query1);
				oFilter2 = new sap.ui.model.Filter("Vbeln", sap.ui.model.FilterOperator.EQ, query2);
				allFilter = new sap.ui.model.Filter([oFilter1, oFilter2], false);
			} else if (query1.length > 0) {
				oFilter1 = new sap.ui.model.Filter("Mandt", sap.ui.model.FilterOperator.EQ, query1);
				allFilter = new sap.ui.model.Filter([oFilter1], false);
			} else if (query2.length > 0) {
				oFilter2 = new sap.ui.model.Filter("Vbeln", sap.ui.model.FilterOperator.EQ, query2);
				allFilter = new sap.ui.model.Filter([oFilter2], false);
			} else {
				oFilter1 = new sap.ui.model.Filter("Mandt", sap.ui.model.FilterOperator.EQ, query1);
				oFilter2 = new sap.ui.model.Filter("Vbeln", sap.ui.model.FilterOperator.EQ, query2);
				allFilter = new sap.ui.model.Filter([oFilter1, oFilter2], false);
			}
			var obinding = this.getView().byId("tblsales").getBinding("items");
			obinding.filter(allFilter);
		}

	});
});