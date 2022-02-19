import { updateStart, updateSuccess, updateError } from "./userSlice";
import axios from "axios";
export const updateUser = async (userInfo, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("/api/users/123/update");
    dispatch(updateSuccess(userInfo));
  } catch (error) {
    dispatch(updateError());
  }
};

export const updateJsonUser = async (userInfo, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    console.log(res.data);
    const { name, email } = res.data;
    dispatch(updateSuccess({ name, email }));
  } catch (err) {
    dispatch(updateError());
  }
};
