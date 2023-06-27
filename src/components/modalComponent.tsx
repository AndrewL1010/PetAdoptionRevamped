"use client"
import { Modal, Button } from "react-bootstrap"
import { useState } from "react";
import ModalProps from '../types/ModalProps';
function modalComponent(props: ModalProps) {
    const {show, setShow, body, title} = props;
    const handleClose = () => setShow(false);
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {body}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}

export default modalComponent