import Attendance from "./Product/Attendance";
import Card from "./Product/Card";
import UseEffectExample from "./Product/UseEffect";
import UseEffectExampleData from "./Product/UseEffectExample";
import MainContainer from "./Task/MainContainer";
import Navbar from "./Task/Navbar";

const App = (props) => {
  // const [products, setProducts] = useState([false]);
 

  // const demo = () => {
  //   {
  //     setProducts()
  //   }
    
  // };

  // const clearproducts = () => {
  //   setProducts([]);
  //   setFilter([]);
  // };
  return (
    <div id="app">
      
     
   {/* <UseEffectExample/> */}
   <UseEffectExampleData/>
   {/* <Attendance/> */}
   {/* <Card/> */}
   {/* <Navbar shop={demo} exist={clearproducts}/>
   <MainContainer product={products}/>
       */}
    </div>
  );
};

export default App;
