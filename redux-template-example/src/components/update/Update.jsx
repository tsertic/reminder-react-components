import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateJsonUser, updateUser } from "../../redux/apiCalls";
import { update } from "../../redux/userSlice";

export default function Update() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const dispatch = useDispatch();

  const changeInput = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    /* updateUser({ name, email }, dispatch); */
    updateJsonUser({ name, email }, dispatch);
  };
  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete">Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                name="name"
                type="text"
                value={name}
                placeholder="John"
                onChange={changeInput}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                name="email"
                className="formInput"
                type="text"
                value={email}
                placeholder="john@gmail.com"
                onChange={changeInput}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button className="updateButton" onClick={handleUpdate}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
