import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const AddItem = () => {
  const [formData, setFormData] = React.useState({
    title: "",
    subtitle: "",
    price: "",
    img: "",
  });
  const navigate = useNavigate();
  const [cookie] = useCookies(["jwt"]);
  const [isAuth, setIsAuth] = React.useState("");
  const [isImgCorrect, setIsImgCorrect] = React.useState('')
  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if(formData.img === ''){
      setIsImgCorrect('Введите ссылку!');
      return;
    }
    try {
      const response = await axios.post("https://kind-light-804f4ce579.strapiapp.com/api/items", {
        data: formData,
      }, {
        headers: {
          Authorization: `Bearer ${cookie.jwt}`,
        },
      });
      console.log("succes!");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {   
    console.log(!!cookie.jwt);
 
    if (!!cookie.jwt === false) {
      setIsAuth("Вы не залогинены!");
      setTimeout(() => {
        navigate("/items");
      }, 2000);
    }
  }, []);

  return (
    <div>
      {!cookie.jwt ? (
        <p>{isAuth}</p>
      ) : (
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={submitHandler}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChangeInputValue}
          />

          <label htmlFor="subtitle">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={onChangeInputValue}
          />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={onChangeInputValue}
          />

          <label htmlFor="img">Img Link</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={onChangeInputValue}
          />
          <p style={{color: 'red'}}>{isImgCorrect}</p>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
