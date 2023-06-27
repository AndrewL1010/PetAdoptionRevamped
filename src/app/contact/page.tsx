"use client"
import React from 'react'
import { Container, Button } from '../../components/bootstrap';
import { useState } from 'react';
import style from './page.module.css';

function Page() {
  const [email, setEmail] = useState<String>("");
  const [text, setText] = useState<String>("");
  const [subject, setSubject] = useState<String>("");
  async function sendMail() {
    const data = {
      email: email,
      text: text,
      subject: subject,
    }
    const response = await fetch("/api/email",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    )
    console.log("hi");
    const result = response.json();
    console.log(result);
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

    </Container>
  )
}

export default Page