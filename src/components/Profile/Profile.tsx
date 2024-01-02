import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import IAuthData from "../../interfaces/IAuthData";

export const Profile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [status, setStatus] = React.useState<string>("Вы не вошли:(");
  const [userData, setUserData] = React.useState<IAuthData>({
    username: "",
    identifier: "",
    password: "",
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!!cookies.jwt) {
      axios
        .get("https://kind-light-804f4ce579.strapiapp.com/api/users/me", {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
        })
        .then(({ data }) => {
          setUserData(data);
          setStatus("вы вошли!");
        });
    } else {
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    }
  }, [cookies]);
  return <div>
    <p>{status}</p>
    <button onClick={() => {
        removeCookie('jwt');
        setStatus('Выходим...')
    }}>Выйти</button>
    <Link to={'/'}>
      <button>Главная</button>
    </Link>
    {!userData ? <p></p> : <p>{userData.username}</p>}
  </div>;
};
