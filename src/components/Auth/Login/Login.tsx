import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import IAuthData from "../../../interfaces/IAuthData";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [authData, setAuthData] = React.useState<IAuthData>({
    identifier: "",
    password: "",
  });
  const [cookie, setCookie] = useCookies(["jwt"]);
  const [loginStatus, setLoginStatus] = React.useState<string>("");
  const navigate = useNavigate();
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://kind-light-804f4ce579.strapiapp.com/api/auth/local",
        authData
      );
      setCookie("jwt", data.jwt);
      setLoginStatus("Успешно залогинен!");
      setTimeout(() => {
        navigate("/profile");
      }, 500);
    } catch {
      console.error("Ошибка!");
    }
  };

  React.useEffect(() => {
    console.log(!!cookie.jwt);

    if (!!cookie.jwt) {
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
      setLoginStatus("Вы уже прошли авторизацию!");
    }
  }, []);
  return (
    <div>
      {!!cookie.jwt ? (
        <p>{loginStatus}</p>
      ) : (
        <div>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="identifier">Логин</label>
            <input
              type="text"
              name="identifier"
              value={authData.identifier}
              onChange={inputChangeHandler}
            />

            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              name="password"
              value={authData.password}
              onChange={inputChangeHandler}
            />
            <p>{loginStatus}</p>
            <button type="submit">Sign In</button>
          </form>
          <Link to={"/"}>
            <button>Главная</button>
          </Link>
        </div>
      )}
    </div>
  );
};
