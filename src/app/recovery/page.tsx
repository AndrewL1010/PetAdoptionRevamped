"use client"
import { useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react';
import { Button, Modal } from '../../components/bootstrap';
import { useRouter } from "next/navigation";
function Page() {
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmpassword] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
    const [routerpush, setrouterpush] = useState<boolean>(false);
    const searchParams = useSearchParams()
    const samePasswords = () => {
        return password === confirmPassword;
    }
    const router = useRouter();

    const handleClose = () => {
        setShow(false);
        router.push("/");
    }


    const changePassword = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (samePasswords()) {
            const recoveryToken = searchParams.get('recoveryToken')
            const data = {
                recoveryToken: recoveryToken,

                schema: {
                    password: password,
                    confirmpassword: confirmPassword,
                },
                schemaType: "password_change"
            }
            const response = await fetch("/api/recovery/changePassword",
                {
                    method: "PUT",
                    body: JSON.stringify(data),
                }
            )
            const result = await response.json();
            if (result === false) {
                setBody("Something went wrong, please try again. Make sure the two password match");
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

export default Page