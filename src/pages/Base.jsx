import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";


const Base = (props) => (
  <>
    <Header />
    <Banner/>
    <div className="container">
      {props.children}
    </div>  
  </>
)

export default Base;