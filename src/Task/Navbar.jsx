import "./Nav.css";
const Navbar = ({ shop, exist,above4,between4,last3 }) => {
  return (
    <div id="navbox">
      <div id="navlogo">
        <img src="https://img.pikbest.com/origin/09/30/02/92jpIkbEsT9sh.png!w700wp" alt="" style={{width:"70px", height:"70px"}} />
      </div>
      <div id="navbtn">
        <button style={{backgroundColor:"lightgreen"}} onClick={shop}>Shop Now</button>
        
        <button style={{backgroundColor:"hotpink"}} onClick={exist}>Exit</button>
      </div>
    </div>
  );
};

export default Navbar;
