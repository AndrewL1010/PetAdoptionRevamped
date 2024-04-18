"use client"
import React from 'react'
import { Container } from '../bootstrap'
import { useState, FormEvent } from 'react';
import styles from './ContactComponent.module.css';
import ModalComponent from '../ModalComponent';
import Spinner from 'react-bootstrap/Spinner';
import { Button, CircularProgress } from '@mui/material';

function ContactComponent() {
    const [email, setEmail] = useState<String>("");
    const [show, setShow] = useState<boolean>(false);
    const [body, setBody] = useState<String>("");
    const [title, setTitle] = useState<String>("");
    const [text, setText] = useState<String>("");
    const [subject, setSubject] = useState<String>("");
    const [loading, setLoading] = useState<boolean>(false);
    async function sendMail(event: FormEvent<HTMLFormElement>) {
        setLoading(true);
        event.preventDefault();
        const data = {
            email: email,
            text: text,
            subject: subject,
        }
        const response = await fetch("/api/contact",
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        )
        const result = await response.json();
        setLoading(false);
        if (result.status === "success") {
            setBody("We have recieved your email, please give us some time to respond");
            setTitle("Success");
            setShow(true);
        }
        else {
            setBody("Unable to send email, please try again");
            setTitle("Error");
            setShow(true);
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={sendMail} className={styles.form}>
                <h1>Contact Us</h1>
                <div className="form-group">
                    <label htmlFor="subject">subject</label>
                    <input style={{ color: "purple" }} onChange={(event) => { setSubject(event.target.value) }} autoComplete="off" className="form-control" id="subject" placeholder="Subject..." required maxLength={30} name='subject' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input style={{ color: "purple" }} onChange={(event) => { setEmail(event.target.value) }} autoComplete="off" type="email" className="form-control" id="username" placeholder="Email..." required maxLength={30} name='email' />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Your inquiry</label>
                    <textarea style={{ color: "purple" }} onChange={(event) => { setText(event.target.value) }} autoComplete="off" className={`form-control ${styles.textarea}`} id="text" name='textbox' placeholder="What would you like help with?" />
                </div>
                
            </form>
            <Button variant='contained' type="submit" className={styles.button}>{loading ? <CircularProgress style={{ 'color': 'white' }} size="1rem" /> : "Send"}</Button>
            <ModalComponent show={show} setShow={setShow} body={body} title={title} ></ModalComponent>
        </div>

    )
}

export default ContactComponent