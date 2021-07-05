import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.scss";
import { GlobalStyles } from "./components/globalStyles";
import { darkTheme, lightTheme } from "./components/Themes";
import Toggle from "./components/Toggler";
import { useDarkMode } from "./components/useDarkMode";
import About from "./pages/About";
import Customers from "./pages/Customers";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import JassaShop from "./pages/JassaShop";
import BusinessWebsites from "./pages/BusinessWebsites";
import GraphQL from './pages/GraphQL'

function App() {
  // const [theme, setTheme] = useState("light");
  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
        {/* <Button onClick={themeToggler}>Switch Theme</Button> */}
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/jassa-shop" component={JassaShop}></Route>
          <Route path="/business-websites" component={BusinessWebsites}></Route>
          <Route path="/graphql" component={GraphQL}></Route>
        </Router>
      </>
    </ThemeProvider>
  );
}
export default App;
