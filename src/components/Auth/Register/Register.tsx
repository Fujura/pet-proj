import React from "react";
import { IRegData } from "../../../interfaces/IRegData";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [userData, setUserData] = React.useState<IRegData>({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [checkPass, setCheckPass] = React.useState("");

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.password === checkPass) {
      console.log("Ок!");
      try {
        await axios.post(
          "https://kind-light-804f4ce579.strapiapp.com/api/auth/local/register",
          userData
        );
        console.log("succes!");
        navigate("/signin");
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("пароли не совпадают!");
    }
  };
  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={onInputChangeHandler}
        />
        <label>email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={onInputChangeHandler}
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={onInputChangeHandler}
        />
        <label>confrim password</label>
        <input
          type="password"
          name="checkPass"
          value={checkPass}
          onChange={(e) => setCheckPass(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>

      <Link to={"/"}>
        <button>Главная</button>
      </Link>
    </div>
  );
};
