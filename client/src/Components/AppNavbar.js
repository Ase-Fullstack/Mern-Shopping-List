import React, { Component } from 'react';
import './Navbar.css';

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';   



class AppNavbar extends Component {

        state = {
            isOpen: false
        }
        toggle = () =>{
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    
  render() {
    return (
    <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">ShoppingList</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="text-right" href="https://github.com/asefullstack">Github</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>    
            </Container>
        </Navbar>
    </div>
    );
}
}





export default AppNavbar;