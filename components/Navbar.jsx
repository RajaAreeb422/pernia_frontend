import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import router, { useRouter } from "next/router";
import Link from "next/link";
import nav from "../styles/navbar.module.css";
import axios from "axios";
import logo from "../public/pernia.png";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Nav } from "react-bootstrap";

import { NavDropdown } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const Navbar2 = () => {
  const [blist, setBlist] = useState(false);
  const [loggedIn, setloggedIn] = useState("");
  const [user, setUser] = useState({
    first_name: "",
  });
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [cats, setCats] = useState([]);
  const [coll, setColl] = useState([]);
  const [show, setShow] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  let scrollToken = null;

  function mouseEnter(direction) {
    scrollToken = setInterval(function () {
      if (direction === "down") {
        setBlist(true);
      } else {
      }
    }, 3);
  }

  function mouseLeave() {
    clearInterval(scrollToken);
  }

  const showDropdown = (e) => {
    console.log("show");
    setShow(!show);
  };
  const hideDropdown = (e) => {
    console.log("close");
    setShow(false);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    router.push("/account/login");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const showText = () => {
    let status = false;

    if (text == "") {
    } else {
      router.push({ pathname: "/allproducts", query: { text: text } });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setloggedIn(localStorage.getItem("token"));

      //setloggedIn("");
      var decoded = jwt_decode(localStorage.getItem("token"));
      setUser(decoded.result);
    } else {
      setloggedIn("");
    }
    let list = [];
    axios
      .get(`https://api.perniacouture.pk/pernia-api/suppliers`)
      .then((resp) => {
        resp.data.data.map((it, i) => {
          list.push(it);
        });
        setItems(list);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.perniacouture.pk/pernia-api/categories`)
      .then((resp) => {
        setCats(resp.data.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`https://api.perniacouture.pk/pernia-api/collections`)
      .then((respo) => {
        setColl(respo.data.data);
      })
      .catch((err) => console.log(err));
  }, [loggedIn]);
  return (
    <div className={nav.Container}>
      <div className={nav.Wrapper}>
        <div className={nav.Left}>
          <hr />
          <div className={nav.MeniItems}>
            <div className={nav.StyledLink} href="/">
              <p>
                {/* <img src="https://wirdanwebsite.000webhostapp.com/images/pernialogo.png" width={100} height={100}/> */}
                <Link href="/" as={`/`}>
                  <img src="/pernia.png" className={nav.Logo} width={100} />
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className={nav.Right}>
          {/* alt={user.first_name} */}
          {/* {loggedIn? */}

          <div className={nav.Link}>
            <div className={nav.StyledLink}>
              <div className={nav.icons}>
                <div
                  className={nav.SearchContainer}
                  style={{ borderRadius: "8px" }}
                >
                  <input
                    className={nav.src}
                    type="search"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Search Product"
                  />
                  {/* <Search  style={{color:'black'}}/>  */}
                  <Search className={nav.srcIcon} onClick={() => showText()} />
                </div>
                <LocalShippingOutlined
                  className={nav.shipping}
                  color="action"
                 
                />
                <Link href="/cart" as={`/cart`}>
                  {cartItems.length > -1 && (
                    <Badge badgeContent={cartItems.length} color="primary">
                      <ShoppingCartOutlined
                        color="action"
                        style={{
                          cursor: "pointer",
                          color: "black",
                          fontSize: "34px",
                          marginRight: "20px",
                        }}
                      />
                    </Badge>
                  )}
                </Link>
              </div>
            </div>
          </div>

          

          {loggedIn != "" ? (
            <NavDropdown
              style={{ marginLeft: "10px" }}
              id="nav-dropdown-dark-example"
              title={
                <Avatar
                  alt={user.first_name}
                  src="/static/images/avatar/1.jpg"
                />
              }
              menuVariant="light"
            >
              <Link href="userProfile/profile">
                <NavDropdown.Item href="userProfile/profile">
                  Account
                </NavDropdown.Item>
              </Link>

              <NavDropdown.Divider />
              <NavDropdown.Item>
                <p onClick={() => removeToken()}>Logout</p>
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavDropdown
              style={{ marginLeft: "10px" }}
              id="nav-dropdown-dark-example"
              title={<Person />}
              menuVariant="light"
            >
              <Link href="/account/login">
                <NavDropdown.Item href="/account/login">Login</NavDropdown.Item>
              </Link>
              <Link href="/account/register">
                <NavDropdown.Item href="/account/register">
                  Register
                </NavDropdown.Item>
              </Link>

              <NavDropdown.Divider />
            </NavDropdown>
          )}
          <>
       
          </>
        
        </div>
      </div>
      <Styles>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav style={{ marginLeft: "auto", marginRight: "auto" }}>
                <Nav.Link>New In</Nav.Link>
                <NavDropdown
                  style={{ marginLeft: "10px" }}
                  id="nav-dropdown-dark-example"
                  title="Brands"
                  menuVariant="dark"
                  renderMenuOnMount={true}
                >
                  <Container style={{ background: "white", width: "1000px" }}>
                    <Row style={{ padding: "10px" }}>
                      {items.map((cl) => (
                        <>
                          <Col
                            tyle={{ padding: "10px" }}
                            xs="12"
                            md="4"
                            className="text-left"
                          >
                            <NavDropdown.Item>
                              <Link
                                key={cl.id}
                                href="/brand/[id]"
                                as={`/brand/${cl.id}`}
                              >
                                <p
                                  style={{ color: "black", fontWeight: "600" }}
                                >
                                  {cl.name}
                                </p>
                              </Link>
                            </NavDropdown.Item>
                          </Col>
                          <Col
                            tyle={{ padding: "10px" }}
                            xs="12"
                            md="4"
                            className="text-left"
                          >
                            <NavDropdown.Item>
                              <Link
                                key={cl.id}
                                href="/brand/[id]"
                                as={`/brand/${cl.id}`}
                              >
                                <p
                                  style={{ color: "black", fontWeight: "600" }}
                                >
                                  {cl.name}
                                </p>
                              </Link>
                            </NavDropdown.Item>
                          </Col>
                        </>
                      ))}
                    </Row>
                  </Container>
                </NavDropdown>

               

                {cats.map((cItem) =>
                  cItem.name == "Sale" ||
                  cItem.name == "MEN" ||
                  cItem.name == "KIDS WEAR" ? (
                    <Nav.Link to="wears/`${cItem.id}`">
                      <Link
                        key={cItem.id}
                        href="/wears/[id]"
                        as={`/wears/${cItem.id}`}
                      >
                        <span style={{ textDecoration: "none" }}>
                          {cItem.name}
                        </span>
                      </Link>
                    </Nav.Link>
                  ) : (
                    <NavDropdown
                      key={cItem.id}
                      style={{ marginLeft: "10px" }}
                      id="nav-dropdown-dark-example"
                      renderMenuOnMount={true}
                      title={
                        <Link
                          key={cItem.id}
                          href="/specificcategory/[id]"
                          as={`/specificcategory/${cItem.id}`}
                        >
                          <span style={{ textDecoration: "none" }}>
                            {cItem.name}
                          </span>
                        </Link>
                      }
                      menuVariant="dark"
                    >
                      {coll.map((cl) =>
                        cl.category_id == cItem.id ? (
                          <Link href="/category/[id]" as={`/category/${cl.id}`}>
                            <NavDropdown.Item href="category/${cl.id}">
                              {cl.name}
                            </NavDropdown.Item>
                          </Link>
                        ) : (
                          ""
                        )
                      )}
                    </NavDropdown>
                  )
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </div>
  );
};

export default Navbar2;
const Styles = styled.div`
  .nav-item.dropdown:hover .dropdown-menu {
    display: block;
    
  }
`;

