import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Layout() {

    return(
        <>
           <Navbar style={{backgroundColor:"#0f4c83"}} variant="dark">
               <Container>
                   <Navbar.Brand href="#Home">Claim Insurance</Navbar.Brand>
                   <Nav.Link href="/" >Home</Nav.Link>
                   <Nav className="me-auto"></Nav>
               </Container>
           </Navbar>
        <Outlet/>
        </>
    )
}

export default Layout;