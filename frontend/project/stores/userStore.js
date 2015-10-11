import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../ActionTypes";
import { EventEmitter } from "events";


// let preparePost = (attributes) => {
//   let post = Object.assign({}, attributes);
//   post.preview = post.body.slice(0, 140);
//   return post;
// };

const CHANGE_EVENT = "CHANGE";

class userEmitter extends EventEmitter {
  getAll() {
    console.log("getAll");
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let userStore = new userEmitter();

AppDispatcher.register(action => {
  switch (action.actionType) {
    case ActionTypes.REGISTER:
      console.log("4. Inside the Store register case method");
      console.log(action.data);
      PostStore.emitChange();
      break;
    case ActionTypes.LOGIN:
      console.log("4. Inside the Store register case method");
      console.log(action.data);
      PostStore.emitChange();
      break;
    default:
     // do nothing
  }
});

export default userStore;
