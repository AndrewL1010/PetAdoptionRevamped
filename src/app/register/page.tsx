"use client"
import { FormEvent, useState } from "react"
import { Button } from "react-bootstrap";
import ModalComponent from "@/components/ModalComponent";
function Page() {
    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [modalMessage, setModalMessage] = useState<String>("");
    const [modalTitle, setModalTitle] = useState<String>("");
    const [show, setShow] = useState<boolean>(false);


    const register = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            schema: {
                username: username,
                password: password,
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
        if (result === "fail") {
            setShow(true);
            setModalTitle("Error");
            setModalMessage("Username taken, please try again");

        }
        if (result === "input-error") {
            setShow(true);
            setModalTitle("Error");
            setModalMessage("invalid input, please try again");
        }
        if (result === "success") {
            setShow(true);
            setModalTitle("Success");
            setModalMessage("Account created, you may login now");
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
            <Button type="submit">Register</Button>

            <ModalComponent setShow={setShow} show={show} body={modalMessage} title={modalTitle}></ModalComponent>

        </form>
    )

}

export default Page