"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { Modal } from "react-bootstrap";
import styles from './RecoveryComponent.module.css'
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

function RecoveryComponent() {
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmpassword] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [routerpush, setrouterpush] = useState<boolean>(false);
    const searchParams = useSearchParams()
    const router = useRouter();

    const handleClose = () => {
        setShow(false);
        router.push("/");
    }


    const changePassword = async (event: FormEvent<HTMLFormElement>) => {
        setLoading(true);
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
        setLoading(false);

    }
    return (
        <div className={styles.container}>
            <form onSubmit={changePassword}>
                <h1 style={{ color: "white" }}>Password Change</h1>
                <div className="form-group">
                    <label style={{ color: "white" }} htmlFor="password">New Password</label>
                    <input style={{ color: "purple" }} onChange={(event) => { setPassword(event.target.value) }} autoComplete="off" type="password" className="form-control" id="password" placeholder="Choose a password" required maxLength={30} />
                </div>
                <div className="form-group">
                    <label style={{ color: "white" }} htmlFor="confirm_password">Confirm New Password</label>
                    <input style={{ color: "purple" }} onChange={(event) => { setConfirmpassword(event.target.value) }} autoComplete="off" type="password" className="form-control" id="confirm_password" placeholder="Confirm your new password" required minLength={6} maxLength={20} />
                </div>

                <Button className={styles.button} variant="contained" type="submit">{loading ? <CircularProgress style={{ 'color': 'white' }} size="1rem" /> : "Change Password"}</Button>

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
                    <Modal.Title style={{ color: "purple" }}>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ color: "purple" }}>
                    {body}
                </Modal.Body>
                <Modal.Footer>
                    <Button className={styles.button} variant="contained" onClick={() => {
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