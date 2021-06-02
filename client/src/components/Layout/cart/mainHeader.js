import { NavLink } from 'react-router-dom';

import classes from '../MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
         
          <li>
            <NavLink activeClassName= {classes.active} to='/welcome'>Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName= {classes.active} to='/graph'>Graph</NavLink>
          </li>
          <li>
            <NavLink activeClassName= {classes.active} to='/world_map'>worldMap</NavLink>

            
          </li>
          <li>
            <NavLink activeClassName= {classes.active} to='/thankAndCreator'>Creator</NavLink>
          </li>
        </ul>
      </nav>
     
    </header>
  );
};

export default MainHeader;