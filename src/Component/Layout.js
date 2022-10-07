import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Layout() {

    return(
        <>
           <Navbar bg="dark" variant="dark">
               <Container>
                   <Navbar.Brand href="#Home">NavBar</Navbar.Brand>
                   <Nav className="me-auto"></Nav>
               </Container>
           </Navbar>
        <Outlet/>
        </>
    )
}

export default Layout;