import userReducer from "./user/user.reducer";
import todoReducer from "./todo/todo.reducer";

const reducers = {
  user: userReducer,
  todo: todoReducer,
};

export default reducers;