(function(window) {
  "use strict";
  var FORM_SELECTOR_PAYMENT = "[data-payment='form']";
  var App = window.App;
  var Payment = App.Payment;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myPayment = new Payment(new DataStore());
  window.myPayment = myPayment;
  var formHandlerPayment = new FormHandler(FORM_SELECTOR_PAYMENT);
  //formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  formHandlerPayment.addSubmitHandler(myPayment.validatePayment.bind(myPayment));
  /*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
  console.log(formHandlerPayment);
})(window);
