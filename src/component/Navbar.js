import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";



const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                    Grecs/options
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                    Trading D1 Cours
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                    QCM PS
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        OOP
                    </NavLink>
                    <NavLink to="/signup" activeStyle>
                        V2
                    </NavLink>
                    <NavLink to="/etfamundi" activeStyle>
                        etf
                    </NavLink>
                    <NavLink to="/apiamundi" activeStyle>
                        API
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;