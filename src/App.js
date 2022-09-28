import ListContainer from "./Components/ListContainer";
import "./App.css";
import useFetch from "./helper/useFetch";

const App = () => {
  const [data] = useFetch("https://fakestoreapi.com/products");

  console.log(data);

  return (
    <div className="main">
      {data.isLoading ? (
        <h1>Is Loading...</h1>
      ) : (
        data.value.map((i) => <ListContainer key={i.id} data={i} />)
      )}
    </div>
  );
};

export default App;
