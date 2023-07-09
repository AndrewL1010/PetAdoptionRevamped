"use client"
import { Modal, Button } from "react-bootstrap"
import ModalProps from '../types/ModalProps';
function modalComponent(props: ModalProps) {
    const { show, setShow, setShowLogin, body, title, } = props;


    return (
        <div>
            <Modal show={show} onHide={() => {
                if (setShowLogin) {
                    setShowLogin(true);
                    setShow(false);

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
                        if (setShowLogin) {
                            setShow(false);
                            setShowLogin(true);
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

export default modalComponent
