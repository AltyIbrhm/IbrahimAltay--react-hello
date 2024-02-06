import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
	return (
<nav className="navbar bg-body-tertiary bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Start Bootstrap</a>
    <form className="d-flex" role="search">
	<a className="navbar-brand">Home</a>
	<a className="navbar-brand">About</a>
	<a className="navbar-brand">Services</a>
	<a className="navbar-brand">Contact</a>
    </form>
  </div>
</nav>
	);

};

export default Navbar;
