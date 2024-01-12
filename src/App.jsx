
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,Route

} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
         {/* <Route path="/" exact >
            <About />
          </Route> */} 
        </Switch>
      </Router>
    </>
  );
}

export default App;
