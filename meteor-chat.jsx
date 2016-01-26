Messages = new Mongo.Collection("Messages");
if (Meteor.isClient) {
  Meteor.subscribe("UserStatus");
   Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
    Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById("render-target"));
  });
 };
if (Meteor.isServer) {
  Meteor.publish("userStatus", function() {
    return Meteor.users.find({ "status.online": true })
  });
};
