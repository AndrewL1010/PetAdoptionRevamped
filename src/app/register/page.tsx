"use client"
import styles from './page.module.css';
import { FormEvent, useState } from "react"
import { Button } from '@mui/material';
import ModalComponent from "@/components/ModalComponent";
import Spinner from 'react-bootstrap/Spinner';
import { CircularProgress } from '@mui/material';
function Page() {
    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [email, setEmail] = useState<String>("");
    const [modalMessage, setModalMessage] = useState<String>("");
    const [modalTitle, setModalTitle] = useState<String>("");
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const register = async (event: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        const data = {
            username: username,
            password: password,
            email: email,
        }
        const response = await fetch("../api/register",
            {
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        setLoading(false);
        if (result.status === "fail") {
            setShow(true);
            setModalTitle("Error");
            setModalMessage(result.message);
        }
        if (result.status === "success") {
            setShow(true);
            setModalTitle("Success");
            setModalMessage("Please check your email to verify your account before logging in");
        }
    }
    return (
        <form className={styles.container} onSubmit={register}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input style={{color: "purple"}} onChange={(event) => { setUsername(event.target.value) }} autoComplete="off" type="text" className="form-control" id="username" placeholder="Choose a username" required maxLength={30} name='username' />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input style={{color: "purple"}} onChange={(event) => { setPassword(event.target.value) }} autoComplete="off" type="password" className="form-control" id="password" placeholder="Choose a password" required minLength={6} maxLength={20} name='password' />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input style={{color: "purple"}} onChange={(event) => { setEmail(event.target.value) }} autoComplete="off" type="email" className="form-control" id="email" placeholder="Provide an email" required minLength={6} maxLength={40} name='email' />
            </div>
            <Button className={styles.button} type="submit">{loading ? <CircularProgress style={{'color': 'white'}} size="1rem"/> : "Register"}</Button>

            <ModalComponent setShow={setShow} show={show} body={modalMessage} title={modalTitle}></ModalComponent>

        </form>
    )

}

export default Page