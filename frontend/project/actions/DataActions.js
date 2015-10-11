import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../ActionTypes";


export default {
  login(results) {
    console.log("3. Inside receivedPosts");
    AppDispatcher.dispatch({
      actionType: ActionTypes.LOGIN,
      data: results
    });
  },
  register(results) {
    console.log("3. inside register action")
    AppDispatcher.dispatch({
      actionType: ActionTypes.REGISTER,
      results
    });
  }
}
