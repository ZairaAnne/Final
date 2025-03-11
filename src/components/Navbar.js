import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="/contacts">Contacts</Link> | <Link to="/add-contact">Add Contact</Link>
  </nav>
);

export default Navbar;
