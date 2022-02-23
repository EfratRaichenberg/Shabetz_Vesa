import react from 'react';
import { Navbar, Container, NavDropdown, Image, Nav, Button } from 'react-bootstrap'
import LOGO from '../images/LOGO.png'
import logo_cubes from '../images/logo_cubes.png';
import Select, { components } from 'react-select';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Switch, Route, Router, Link, useHistory } from 'react-router-dom';

const Header = (props) => {

    const history = useHistory();

    const url = props.userDetails?.idSubscription == undefined ? '' : props.userDetails?.idSubscription == 3 ? '/Admenistrator' : '/User';

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            textAlign: 'right',
        })
    }

    const logOut = () => {
        history.push("/");
        props.setUser({
            user: {
                UserId: '',
                UserNAme: '',
                password:'',
                mail: '',
                phone : '',
                City : '',
                Neighborhood : '',
                Street: ''
            }
        })
        emptyCache();
    }

    function emptyCache() {
        if ('caches' in window) {
            caches.keys().then((names) => {
                // Delete all the cache files
                names.forEach(name => {
                    caches.delete(name);
                })
            });

            // Makes sure the page reloads. Changes are only visible after you refresh.
            window.location.reload(true);
        }
    }

    return (
        <Navbar id='header'>
            <Container>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Brand>
                    <img
                        src={logo_cubes}
                        width="100rem"
                        height="85rem"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand id="logo">המשחקייה</Navbar.Brand>
                &nbsp;&nbsp;&nbsp;
                <Navbar.Collapse className="headerItems" style={{ textAlign: 'left' }} >
                    <Nav.Link id="addG" href={`${url}/About`} >
                        <label className="linkText">אודותינו</label>
                    </Nav.Link>
                </Navbar.Collapse>
                <Navbar.Collapse className="headerItems" style={{ textAlign: 'left' }}>
                    <Navbar.Text style={{}}>
                        הנך מחובר כ: {props.userDetails?.nameSubscription}
                    </Navbar.Text>
                    <Button variant="none" className="headerItems" size="sm" onClick={(e) => { logOut() }}>התנתק</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = state => {
    return {
        userDetails: state?.user
    };
};
const setDispatchToProps = dispatch => {
    return {
        setUser: (USER) => dispatch({ type: 'SET_USER', user: USER }),
    }
};
const HeaderContainer = connect(mapStateToProps, setDispatchToProps)(Header);

export default HeaderContainer;