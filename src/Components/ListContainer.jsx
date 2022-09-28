import style from "./ListContainer.module.css";
import useFetch from "../helper/useFetch";

const ListContainer = ({ data }) => {
  // const [data] = useFetch("https://fakestoreapi.com/carts");

  // console.log(data);

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img className={style.image} src={data.image} alt="" />
      </div>
      <div>
        <p>{data.price} $</p>
        <p>
          {data.description.length > 200
            ? data.description.slice(0, 100) + "..."
            : data.description}
        </p>
      </div>
    </div>
  );
};

export default ListContainer;

// css module , inLine css style , global style
