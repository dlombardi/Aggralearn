import DataActions from "./actions/DataActions";

// let PostObject = Parse.Object.extend("PostObject");

export default {
  registerUser(results) {
    console.log("2. Inside registerUser");
    console.log(results);
    let user = new Parse.User();
    user.set("username", results.username);
    user.set("password", results.password);
    user.set("email", results.email);
    user.signUp(null, {
      success: function(user) {
        DataActions.register(user);
      },
      error: function(user, error) {
        console.log(error);
        if(error.code === 209){
          Parse.User.logOut();
        }
      }
    });
  }
}
