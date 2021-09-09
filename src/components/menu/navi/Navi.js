import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" style={{paddingLeft:"60px"}}>
        <NavbarBrand href="/dashboard">Github Todo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
