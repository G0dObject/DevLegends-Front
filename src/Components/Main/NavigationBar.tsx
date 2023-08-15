import React, { useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const [active, setActive] = React.useState("Profile");
  const list = ["Profile", "Party", "Clan"];

  return (
    <>
      <div className="d-flex flex-row">
        {list.map((item) => {
          return (
            <div className="me-2" key={item}>
              <Link
                className={`menu-item ${active === item ? "active" : ""}`}
                onMouseEnter={() => setActive(item)}
                to={"/Main/" + item}
              >
                {item}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="nav-line"></div>
    </>
  );
};

interface NavItemProps {
  name: string;
  icon: string;
  isActive: boolean;
  onClick: (name: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ name, icon, isActive, onClick }) => {
  return (
    <Nav.Link onClick={() => onClick(name)}>
      <div className={`nav-item ${isActive ? "active" : ""}`}>
        <i className={`bi bi-${icon} nav-icon`}></i>
        <span className="nav-label">{name}</span>
      </div>
    </Nav.Link>
  );
};

export default NavigationBar;
