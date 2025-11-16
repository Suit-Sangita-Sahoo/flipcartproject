import CardContainer from "./CardContainer";
//import "./Main.css";

const MainContainer = ({ products }) => {
  return (
    <div className="grid">
      {products.map((data) => (
        <CardContainer product={data} />
      ))}
    </div>
  );
};

export default MainContainer;
