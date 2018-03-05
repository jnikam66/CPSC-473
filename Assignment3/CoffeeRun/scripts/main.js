(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-coffee-order='form']";
  var CHECKLIST_SELECTOR = "[data-coffee-order='checklist']";
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var CheckList = App.CheckList;
  var FormHandler = App.FormHandler;
  var myTruck = new Truck("ncc-1701", new DataStore());
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });
  /*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
  console.log(formHandler);
})(window);