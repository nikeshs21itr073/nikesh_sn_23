import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
       
        </li>
        <li>
          <Link to="/Inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/sales">Sales</Link>
        </li>
        {/* Add links to other sections of your application */}
      </ul>
    </nav>
  );
}

export default Navbar;
