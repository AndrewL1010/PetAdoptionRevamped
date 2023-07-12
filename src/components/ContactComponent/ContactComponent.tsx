"use client"
import React from 'react'
import { Container, Button } from '../bootstrap'
import { useState, FormEvent } from 'react';
import style from './ContactComponent.module.css';
import ModalComponent from '../ModalComponent';

function ContactComponent() {
    const [email, setEmail] = useState<String>("");
    const [show, setShow] = useState<boolean>(false);
    const [body, setBody] = useState<String>("");
    const [title, setTitle] = useState<String>("");
    const [text, setText] = useState<String>("");
    const [subject, setSubject] = useState<String>("");
    async function sendMail(event: FormEvent<HTMLFormElement>) {
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
        <Container>
            <form onSubmit={sendMail}>
                <h1>Contact Us</h1>
                <div className="form-group">
                    <label htmlFor="subject">subject</label>
                    <input onChange={(event) => { setSubject(event.target.value) }} className="form-control" id="subject" placeholder="Subject..." required maxLength={30} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={(event) => { setEmail(event.target.value) }} type="email" className="form-control" id="username" placeholder="Email..." required maxLength={30} />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Your inquiry</label>
                    <textarea onChange={(event) => { setText(event.target.value) }} className={`form-control ${style.textarea}`} id="text" placeholder="What would you like help with?" />
                </div>
                <Button type="submit">Send</Button>
            </form>
            <ModalComponent show={show} setShow={setShow} body={body} title={title} ></ModalComponent>

        </Container>
    )
}

export default ContactComponent