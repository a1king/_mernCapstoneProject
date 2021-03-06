import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import HomeScreen from "./screens/Homescreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

// Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  // useEffect(() => {
  //   fetch("/api/products", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "",
  //     },
  //   })
  // //     .then(function (response) {
  // //       return response.json();
  // //     })
  // //     .then(function (myJson) {
  // //       console.log(JSON.stringify(myJson));
  // //     });
  // // }, []);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      .
    </Router>
  );
}

export default App;
