"use client";
import { FaPaw } from 'react-icons/fa';
import { Navbar, Nav, Container, NavDropdown, Modal, Button } from "react-bootstrap";
import { useState } from 'react';
import React from 'react'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from './NavBar.module.css';
import NavBarProps from '@/types/NavBarProps';
function NavBar(props: NavBarProps) {
    let { status, user } = props
    const [show, setShow] = useState<boolean>(false);
    const [username, setUsername] = useState<String>();
    const [password, setPassword] = useState<String>("");
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(status);
    const [currentUser, setCurrentUser] = useState<String>(user);
    const router = useRouter();
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const login = async () => {
        const data = {
            username: username,
            password: password,
        }
        const response = await fetch("/api/login",
            {
                method: "POST",
                body: JSON.stringify(data)
            }

        )
        let result = await response.json();
        if (result.status === "fail") {
            console.log("inccorrect username or password");

        }
        else {
            handleClose();
            setIsLoggedIn(true);
            setCurrentUser(result.username);

        }

    }
    const logout = async () => {
        const response = await fetch("/api/logout",
            {
                method: "POST"
            }
        );
        const result = await response.json();
        if (result === "loggedout") {
            setIsLoggedIn(false);
            router.push("/");
        }


    }

    const pathname = usePathname();

    return (
        <div>
            <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} href="/">
                        <FaPaw size={40} className={styles.logo} />
                        Pet Sanctuary
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Nav>
                        <Navbar.Collapse id="main-navbar">
                            <Nav.Link as={Link} href="/dogs" active={pathname === "/dogs"}>Dogs</Nav.Link>
                            <Nav.Link as={Link} href="/cats" active={pathname === "/cats"}>Cats</Nav.Link>
                            <Nav.Link as={Link} href="/rabbits" active={pathname === "/rabbits"}>Rabbits</Nav.Link>
                            <Nav.Link href="/birds" active={pathname === "/birds"}>Birds</Nav.Link>
                        </Navbar.Collapse>
                    </Nav>

                    <Nav>
                        {isLoggedIn ? (

                            <NavDropdown title={currentUser}>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href='/profile'>Profile</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <>
                                <Nav.Link as={Link} href="/register" active={pathname === "/register"}>Register</Nav.Link>
                                <Nav.Link onClick={handleShow}>Login</Nav.Link>
                            </>
                        )}

                    </Nav>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <form action={"/api/login"} method='post'>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setUsername(event.target.value) }} type="username" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value) }} type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={login}>
                            Login
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>

    )
}

export default NavBar