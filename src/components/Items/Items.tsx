import axios from "axios";
import React, { useState } from "react";
import { Item } from "./Item/Item";
import { Link } from "react-router-dom";

export const Items = () => {
  const [itemsData, setItemsData] = useState([
    {
      id: "",
      attributes: {},
    },
  ]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://kind-light-804f4ce579.strapiapp.com/api/items"
        );
        setItemsData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {!itemsData.length ? (
        <p>Нету</p>
      ) : (
        itemsData.map((item) => (
          <Item key={item.id} attributes={item.attributes} />
        ))
      )}

      <Link to={"/addItem"}>
        <button>Добавить Item</button>
      </Link>

      <Link to={"/"}>
        <button>Назад</button>
      </Link>
    </div>
  );
};
