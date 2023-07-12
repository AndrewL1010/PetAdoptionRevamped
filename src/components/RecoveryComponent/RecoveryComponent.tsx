
"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function RecoveryComponent() {
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmpassword] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
    const [routerpush, setrouterpush] = useState<boolean>(false);
    const searchParams = useSearchParams()
    const router = useRouter();

    const handleClose = () => {
        setShow(false);
        router.push("/");
    }


    const changePassword = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password === confirmPassword) {
            const recoveryToken = searchParams.get('recoveryToken')
            const data = {
                recoveryToken: recoveryToken,
                password: password,
                confirmpassword: confirmPassword,
            }
            const response = await fetch("/api/recovery/changePassword",
                {
                    method: "PUT",
                    body: JSON.stringify(data),
                }
            )
            const result = await response.json();
            if (result.status === "fail") {
                setBody(result.message);
                setTitle("Error");
                setShow(true);
            }
            else {
                setBody("Password changed, you may login with your new password");
                setTitle("Success");
                setShow(true);
                setrouterpush(true);
            }
        }
        else {
            setBody("Both passwords must match");
            setTitle("Error");
            setShow(true);
        }

    }
    return (
        <div>
            <form onSubmit={changePassword}>
                <h1>Password Change</h1>
                <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input onChange={(event) => { setPassword(event.target.value) }} type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Choose a password" required maxLength={30} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm_password">Confirm New Password</label>
                    <input onChange={(event) => { setConfirmpassword(event.target.value) }} type="password" className="form-control" id="confirm_password" placeholder="Confirm your new password" required minLength={6} maxLength={20} />
                </div>

                <Button type="submit">Change Password</Button>

            </form>
            <Modal show={show} onHide={() => {
                if (routerpush) {
                    handleClose();
                }
                else {
                    setShow(false);
                }
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {body}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        if (routerpush) {
                            handleClose();
                        }
                        else {
                            setShow(false);
                        }
                    }}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}

export default RecoveryComponent