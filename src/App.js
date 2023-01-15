import "./App.css";

import Information from "./component/Information";
import About from "./component/About";
import Interest from "./component/Interest";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="container">
      <div className="inner-container">
        <Information />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
