"use client";
import { FaPaw } from 'react-icons/fa';
import { Navbar, Nav, Container, NavDropdown, Modal, Button } from "react-bootstrap";
import { useState } from 'react';
import React from 'react'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from './NavBar.module.css';
import NavBarProps from '@/types/NavBarProps';
import ModalComponent from '@/components/ModalComponent';
import cookies from 'js-cookie';
function NavBar(props: NavBarProps) {
    let { status, user } = props
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [showRecoveryMessage, setShowRecoveryMessage] = useState<boolean>(false);
    const [showRecovery, setShowRecovery] = useState<boolean>(false);
    const [username, setUsername] = useState<String>("");
    const [recoveryUsername, setRecoveryUsername] = useState<string>("");
    const [password, setPassword] = useState<String>("");
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(status);
    const [body, setBody] = useState<String>("");
    const [title, setTitle] = useState<String>("");
    const [currentUser, setCurrentUser] = useState<String>(user);
    const router = useRouter();
    const handleShow = () => setShowLogin(true);
    const handleClose = () => setShowLogin(false);
    const resetValues = () => {
        setUsername("");
        setPassword("");

    }
    const showPasswordRecoveryModal = () => {
        setShowLogin(false);
        setShowRecovery(true);
    }
    const handleRecovery = async () => {
        setShowRecovery(false);
        const data = {
            username: recoveryUsername,
        }
        const response = await fetch("/api/recovery",
            {
                method: "POST",
                body: JSON.stringify(data),

            }

        )
        const result = await response.json();

        if (result.status === "fail") {
            setBody(result.message);
            setTitle("Error");
            setShowRecoveryMessage(true);
            setRecoveryUsername("");
        }
        else {
            setBody(result.message);
            setTitle("Success");
            setShowRecoveryMessage(true);
            setRecoveryUsername("");
        }
    }

    const login = async () => {
        const data = {
            username: username,
            password: password,
        }
        const response = await fetch("/api/login",
            {
                method: "POST",
                body: JSON.stringify(data),


            }

        )
        let result = await response.json();
        if (result.status === "fail") {
            handleClose();
            setBody(result.message);
            setTitle("Error");
            setShow(true);
            resetValues();

        }
        else {
            handleClose();
            setIsLoggedIn(true);
            setCurrentUser(result.username);
            resetValues();

        }

    }
    const logout = async () => {
        const csrf_token = cookies.get("csrf_token");
        const headers = new Headers();
        if (csrf_token) {
            headers.append("csrf_token", csrf_token);
            const response = await fetch("/api/logout",
                {
                    method: "POST",
                    headers: headers

                }
            );
            const result = await response.json();
            if (result.status === "success") {
                setPassword("");
                setUsername("");
                setIsLoggedIn(false);
                router.push("/");
            }
            else {
                setBody(result.message);
                setTitle("Error");
                setShow(true);
            }

        }
        else {
            setBody("Invalid request from third party");
            setTitle("Error");
            setShow(true);
        }



    }

    const pathname = usePathname();

    return (
        <div className={styles.parentContainer}>
            <Navbar bg="primary" variant="dark" sticky="top">
                <Container className={styles.container}>
                    <Navbar.Brand as={Link} href="/">
                        <FaPaw size={40} className={styles.logo} />
                        Pet Sanctuary
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Nav>
                        <NavDropdown id="main-navbar" title="Adopt">
                            <NavDropdown.Item href='/how' active={pathname === "/how"}>How to adopt</NavDropdown.Item>
                            <NavDropdown.Item href='/pets' active={pathname === "/pets"}>Available pets</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} href="/about" active={pathname === "/about"}>About Us</Nav.Link>
                        <Nav.Link as={Link} href="/FAQ" active={pathname === "/FAQ"}>FAQ</Nav.Link>
                        <Nav.Link as={Link} href="/contact" active={pathname === "/contact"}>Contact Us</Nav.Link>
                    </Nav>

                    <Nav>
                        {isLoggedIn ? (

                            <NavDropdown title={currentUser}>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
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
            <ModalComponent setShow={setShow} setShowLogin={setShowLogin} show={show} body={body} title={title}></ModalComponent>
            <ModalComponent setShow={setShowRecoveryMessage} show={showRecoveryMessage} body={body} title={title} setShowLogin={setShowRecovery}></ModalComponent>
            <Modal show={showRecovery} onHide={() => { setShowRecovery(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setRecoveryUsername(event.target.value) }} type="username" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { setShowRecovery(false) }}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleRecovery}>
                            Send Email
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

            <Modal show={showLogin} onHide={handleClose}>
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
                        <div className={styles.forgotpassword}>
                            <p onClick={showPasswordRecoveryModal}> Forgot Password</p>
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