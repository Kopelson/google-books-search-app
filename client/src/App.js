import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";


function App() {
  return (
      <Router>
        <div>
          <NavBar></NavBar>
          <div className="container">
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Wrapper>
          <Footer />
          </div>
        </div>
      </Router>
  );
}


export default App;
