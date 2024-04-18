"use client"
import { Modal } from "react-bootstrap"
import ModalProps from '../types/ModalProps';
import Button from "@mui/material/Button";
import styles from './ModalComponent.module.css'
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
                    <Modal.Title  className={styles.modalContent} >{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body className={styles.modalContent}>
                    {body}
                </Modal.Body>
                <Modal.Footer>
                    <Button className={styles.modalCloseButton} variant="contained" onClick={() => {
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
