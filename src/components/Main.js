import Boxes from "./Boxes";
import FormComponent from "./FormComponent";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";


const Contacts = () => {
  return (
    <div>
      <h1>This is the Contacts page</h1>
    </div>
  );
};
const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/boxes" component={Boxes} />
        <Route path="/form" component={FormComponent} />
      </Switch>
    </main>
  );
};

export default Main;