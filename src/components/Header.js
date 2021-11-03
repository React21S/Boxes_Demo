import { NavLink } from "react-router-dom";
const Header =()=>{
    return(
     
   <header>
         <h1>Logo</h1>
         <div>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="active" to="/" exact>Home </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">About </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contacts">Contacts </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active"  to="/boxes">Boxes </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/form">Form </NavLink>
            </li>
          </ul>
        </nav>
      </div>
           
     </header>
    
    );
  };

  export default Header;