import { start, success, failure } from "./user";
import axios from "axios";

export const loginThunk = async (dispatch, user) => {
  dispatch(start());
  try {
    const res = await axios.post("http://localhost:9000/api/auth/login", user);
    dispatch(success(res.data));
  } catch (err) {
    dispatch(failure());
  }
};
