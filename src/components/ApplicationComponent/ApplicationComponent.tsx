"use client"
import { useState, FormEvent } from 'react';
import { Container, Button } from '../bootstrap';
import ApplicationProps from "@/types/ApplicationProps";
import styles from './ApplicationComponent.module.css';
import ModalComponent from '../ModalComponent';
import cookies from 'js-cookie';
import Spinner from 'react-bootstrap/Spinner';

function ApplicationComponent(props: ApplicationProps) {
    const { name, breed, animal_id } = props;
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [occupation, setOccupation] = useState<string>("employed");
    const [address, setAddress] = useState<string>("");
    const [experience, setExperience] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
    const [body, setBody] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        const headers = new Headers();
        const csrf_token = cookies.get('csrf_token');
        if (csrf_token) {
            headers.append('csrf_token', csrf_token);
            const data = {
                animal_id,
                firstName,
                lastName,
                occupation,
                address,
                experience,
                email,
            }
            const response = await fetch('/api/apply',
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: headers
                }
            )
            const result = await response.json();
            setLoading(false);
            if (result.status === "success") {
                setBody("You have successfully submitted your application, please give some time for us to review your application.");
                setTitle("Success");
                setShow(true);

            }
            else {
                setBody(result.message);
                setTitle("Error");
                setShow(true);
            }

        }
        else {
            setBody("Invalid request from third party");
            setTitle("Error");
            setShow(true);
        }




    }
    return (
        <Container>
            <form onSubmit={handleSubmit} className={styles.container}>
                <h1>Application For {breed}: {name}</h1>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input onChange={(event) => { setFirstName(event.target.value) }} autoComplete="off" className="form-control" id="firstname" placeholder="First Name..." required maxLength={30} name='firstname' />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input onChange={(event) => { setLastName(event.target.value) }} autoComplete="off" className="form-control" id="lastname" placeholder="Last Name..." required maxLength={30} name='lastname' />
                </div>
                <div className={`form-group ${styles.radiocontainer}`}>
                    <div>
                        <input type="radio" id="employed" name="occupation" value="Employed" defaultChecked onClick={() => { setOccupation("employed") }} />
                        <label htmlFor="employed">Employed</label>
                    </div>
                    <div>
                        <input type="radio" id="unemployed" name="occupation" value="Unemployed" onClick={() => { setOccupation("Unemployed") }} />
                        <label htmlFor="unemployed">Unemployed</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input onChange={(event) => { setAddress(event.target.value) }} autoComplete="off" className="form-control" id="address" placeholder="Address..." required maxLength={30} name='address' />
                </div>
                <div className="form-group">
                    <label htmlFor="experience">Experience</label>
                    <textarea onChange={(event) => { setExperience(event.target.value) }} autoComplete="off" className="form-control" id="experience" placeholder="Your Experience With Animals..." required rows={10} name='experience' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={(event) => { setEmail(event.target.value) }} autoComplete="off" type="email" className="form-control" id="email" placeholder="Email..." name='email' required maxLength={30} />
                </div>

                <Button type='submit'>{loading ? <Spinner size="sm"></Spinner> : "Submit"}</Button>
            </form>
            <ModalComponent body={body} title={title} show={show} setShow={setShow}></ModalComponent>

        </Container>
    )
}

export default ApplicationComponent