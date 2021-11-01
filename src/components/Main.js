import Box from './Box';
import { NavLink, Switch, Route} from 'react-router-dom';

const Home = ()=>{
  return(
    <div>
      <h1>This is Home page</h1>
    </div>
  )
}

const About = ()=>{
  return(
    <div>
      <h1>This is About page</h1>
    </div>
  )
}

const Contact = ()=>{
  return(
    <div>
      <h1>This is Contacts page</h1>
    </div>
  )
}

const Main= ()=>{
    return(
      <div>
         <main>
      <nav>
        <ul>
          <li><NavLink to="/"> Home </NavLink> </li>
          <li><NavLink to="/about"> About</NavLink> </li>
          <li><NavLink to="/contact"> Contact</NavLink> </li>
        </ul>
      </nav>
      <Switch>
        <Route path = "/" exact component={Home}/>
        <Route path = "/about" exact component={About}/>
        <Route path = "/contact" exact component={Contact}/>
      </Switch>

      <Box name = "Maria" title = "CEO" age = "29"/>
      <Box name = "kati" title = "Developer" age = "25"/>
      <Box name = "Kartin" title = "Designer" age = "45"/>  
      </main>
      </div>
    );
  };

  export default Main;