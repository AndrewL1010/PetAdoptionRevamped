"use client";
import { Container, Modal } from "react-bootstrap";
import Button from '@mui/material/Button';
import { useState } from 'react';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from './NavBar.module.css';
import NavBarProps from '@/types/NavBarProps';
import ModalComponent from '@/components/ModalComponent';
import cookies from 'js-cookie';
import { useGlobalContext } from '@/components/CartCounterContext';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Checkbox, CircularProgress, FormControlLabel, MenuList } from "@mui/material";



const pages = [
    { title: "How To Adopt", url: "/Adoption-Process" },
    { title: "Pets", url: "/pets" },
    { title: "Products", url: "/products" },
];
const infoPages = [
    { title: "About Us", url: "/about" },
    { title: "Contact Us", url: "/contact" },
    { title: "FAQ", url: "/FAQ" },
]


function NavBar(props: NavBarProps) {
    let { status, user } = props;
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
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const handleShow = () => setShowLogin(true);
    const handleClose = () => setShowLogin(false);
    const { cartCount } = useGlobalContext();

    const showPasswordRecoveryModal = () => {
        setShowLogin(false);
        setShowRecovery(true);
    }
    const handleRecovery = async () => {
        setLoading(true);
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
        setLoading(false);

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

    const login = async (isDemo: boolean) => {
        setLoading(true);
        const data = {
            username: username,
            password: password,
        }
        if (isDemo) {
            data.username = "DemoAccount";
            data.password = "123456"
        }
        const response = await fetch("/api/login",
            {
                method: "POST",
                body: JSON.stringify(data),


            }

        )
        let result = await response.json();
        setLoading(false);
        if (result.status === "fail") {
            handleClose();
            setBody(result.message);
            setTitle("Error");
            setShow(true);

        }
        else {
            handleClose();
            setIsLoggedIn(true);
            setCurrentUser(result.username);

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


    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchorElInfo, setAnchorElInfo] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleCloseInfoMenu = () => {
        setAnchorElInfo(null);
    };
    const handleOpenInfoMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElInfo(event.currentTarget);
    };




    const handleRoute = (url: string) => {
        router.push(url);
    }
    const pathname = usePathname();

    return (
        <div className={styles.parentContainer}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Container>
                    <Toolbar disableGutters>
                        <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                            onClick={() => { router.push('/') }}
                        >
                            Pet Sanctuary
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                                MenuListProps={{ sx: { backgroundColor: "#83029B", color: "white" } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem className={styles.font} key={page.title} onClick={() => {
                                        handleCloseNavMenu();
                                        handleRoute(page.url)
                                    }}>
                                        {page.title}

                                    </MenuItem>
                                ))}
                                {infoPages.map((page) => (
                                    <MenuItem className={styles.font} key={page.title} onClick={() => {
                                        handleCloseNavMenu();
                                        handleRoute(page.url)
                                    }}>
                                        {page.title}

                                    </MenuItem>
                                ))}


                            </Menu>
                        </Box>
                        <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                            onClick={() => { router.push('/') }}
                        >
                            PS
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', backgroundColor: "inherit" } }}>
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.title}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        handleRoute(page.url);
                                    }}
                                    sx={{ color: "white" }}
                                    className={styles.menuitems}



                                >
                                    {page.title}
                                </MenuItem>
                            ))}
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <MenuItem title="More Info" className={styles.menuitems} onClick={handleOpenInfoMenu}>
                                    Info <ArrowDropDownIcon />
                                </MenuItem>

                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-info"
                                    anchorEl={anchorElInfo}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElInfo)}
                                    onClose={handleCloseInfoMenu}
                                    MenuListProps={{ sx: { backgroundColor: "#83029B", color: "white" } }}
                                >
                                    {infoPages.map((page) => (
                                        <MenuItem
                                            className={styles.font}
                                            key={page.title}
                                            onClick={() => {
                                                handleCloseInfoMenu();
                                                handleRoute(page.url);
                                            }}


                                        >
                                            {page.title}
                                        </MenuItem>
                                    ))}

                                </Menu>
                            </Box>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={isLoggedIn ? String(username) : ""} sx={{ bgcolor: "white", color: "purple" }} />
                                </IconButton>
                            </Tooltip>

                            <Link className={styles.logo} href={"/cart"}><ShoppingCartIcon className={styles.logo} sx={{ color: "white" }} fontSize='large' /> {cartCount}</Link>
                            <FormControlLabel
                                className={styles.formControl}
                                sx={{ margin: "20px" }}
                                control={
                                    <Checkbox
                                        checked={isLoggedIn}
                                        onChange={() => {
                                            if (isLoggedIn) {
                                                logout();
                                            }
                                            else {
                                                login(true);
                                            }
                                        }}
                                        style={{
                                            color: "white",
                                        }}
                                        value="demo"
                                    />
                                }
                                label={<Typography variant="h6" style={{ color: 'white' }} className={styles.demo}>Demo Login</Typography>}
                            />
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                MenuListProps={{ sx: { backgroundColor: "#83029B", color: "white" } }}
                            >
                                {isLoggedIn ? (


                                    <MenuItem className={styles.font} onClick={() => {

                                        handleCloseUserMenu();
                                        logout();
                                    }}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>


                                ) : (

                                    <MenuList>
                                        <MenuItem className={styles.font} onClick={() => {
                                            handleCloseUserMenu();
                                            handleShow();
                                        }}>
                                            <Typography textAlign="center">Login</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={() => {
                                            handleCloseUserMenu();
                                            router.push('/register')
                                        }}>
                                            <Typography textAlign="center">Register</Typography>
                                        </MenuItem>
                                    </MenuList>



                                )

                                }
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>



            <ModalComponent setShow={setShow} setShowLogin={setShowLogin} show={show} body={body} title={title}></ModalComponent>
            <ModalComponent setShow={setShowRecoveryMessage} show={showRecoveryMessage} body={body} title={title} setShowLogin={setShowRecovery}></ModalComponent>
            <Modal show={showRecovery} onHide={() => { setShowRecovery(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "purple" }}>Recovery</Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <div className="form-group">
                            <label style={{ color: "purple" }} htmlFor="username">Username</label>
                            <input style={{ color: "purple" }} autoComplete="off" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setRecoveryUsername(event.target.value) }} type="text" className="form-control" id="username" placeholder="Enter username" name='username' />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className={styles.muiButton} variant="contained" onClick={() => { setShowRecovery(false) }}>
                            Close
                        </Button>
                        <Button className={styles.muiButton} variant="contained" onClick={handleRecovery}>
                            {loading ? <CircularProgress style={{ 'color': 'white' }} size="1rem" /> : "Send Email"}
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

            <Modal show={showLogin} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "purple" }}>Login</Modal.Title>
                </Modal.Header>
                <form action={"/api/login"} method='post'>
                    <Modal.Body>
                        <div className="form-group">
                            <label style={{ color: "purple" }} htmlFor="username">Username</label>
                            <input style={{ borderColor: "purple", color: "purple" }} autoComplete="off" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setUsername(event.target.value) }} type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" name='username' />
                        </div>
                        <div className="form-group">
                            <label style={{ color: "purple" }} htmlFor="password">Password</label>
                            <input style={{ borderColor: "purple", color: "purple" }} autoComplete="off" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value) }} type="password" className="form-control" id="password" placeholder="Password" name='password' />
                        </div>
                        <div className={styles.forgotpassword}>
                            <p style={{ color: "purple" }} onClick={showPasswordRecoveryModal}> Forgot Password</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className={styles.muiButton} variant="contained" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className={styles.muiButton} variant="contained" onClick={() => { login(false) }}>
                            {loading ? <CircularProgress style={{ 'color': 'white' }} size="1rem" /> : "Login"}
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>

    )
}

export default NavBar