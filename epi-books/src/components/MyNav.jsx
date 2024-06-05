import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar  } from 'react-bootstrap';
import SearchBook from './SearchBook';
import { AuthContext, ThemeContext } from '../modules/Contexts';

export default function MyNav({search, handleSearch}) {

  let [themeCtx, setThemeCtx] = useContext(ThemeContext);
  let [authUserCtx] = useContext(AuthContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg={themeCtx} data-bs-theme={themeCtx}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <SearchBook search={search} handleSearch={handleSearch} />
        <Navbar.Text className={themeCtx + "btn" +  " mx-5" }>
            Signed in as: <a href="#login">{authUserCtx}</a>
          </Navbar.Text>
          <Button variant="dark" onClick={() => {
            themeCtx === 'light' ? setThemeCtx('dark') : setThemeCtx('light')
          }}>Theme</Button>
          
      </Container>
    </Navbar>
  )
}
