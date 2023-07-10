"use client"
import styles from './page.module.css';
import { FormEvent, useState } from "react"
import { Button } from "react-bootstrap";
import ModalComponent from "@/components/ModalComponent";
function Page() {
    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [email, setEmail] = useState<String>("");
    const [modalMessage, setModalMessage] = useState<String>("");
    const [modalTitle, setModalTitle] = useState<String>("");
    const [show, setShow] = useState<boolean>(false);


    const register = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            schema: {
                username: username,
                password: password,
                email: email,
            },
            schemaType: "register"
        }
        const response = await fetch("../api/register",
            {
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
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
        <form onSubmit={register}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input onChange={(event) => { setUsername(event.target.value) }} type="username" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Choose a username" required maxLength={30} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={(event) => { setPassword(event.target.value) }} type="password" className="form-control" id="password" placeholder="Choose a password" required minLength={6} maxLength={20} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={(event) => { setEmail(event.target.value) }} type="email" className="form-control" id="email" placeholder="Provide an email" required minLength={6} maxLength={40} />
            </div>
            <Button className={styles.button} type="submit">Register</Button>

            <ModalComponent setShow={setShow} show={show} body={modalMessage} title={modalTitle}></ModalComponent>

        </form>
    )

}

export default Page