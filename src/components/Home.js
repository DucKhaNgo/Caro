import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Register from './Register';
import Login from './Login';

class Home extends React.PureComponent {
    render() {
        return (
            <Router>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Caro Game</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link ><Link to="/" className="nav-link">Home</Link></Nav.Link>
                            <Nav.Link ><Link to="/register" className="nav-link">Register</Link></Nav.Link>
                            <Nav.Link ><Link to="/login" className="nav-link">Log In</Link></Nav.Link>                            
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    <hr />
                    <Switch>
                        <Route path='/register' component={Register} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Home;