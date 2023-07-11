"use client"
import ApplicationNavigateProp from '@/types/ApplicationNavigateProp';
import { Button } from '../components/bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ModalComponent from './ModalComponent';
function ApplicationNavigate(props: ApplicationNavigateProp) {
    const { isLoggedIn, id, name } = props;
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
    const router = useRouter();
    const handleRoute = (id: number) => {
        router.push(`/adopt/${id}`);
    }
    const handleMessage = () => {
        setBody("Please log in before filling the adoption form");
        setTitle("Error");
        setShow(true)
    }

    return (
        <>
            {isLoggedIn ? (

                <Button onClick={() => { handleRoute(id) }}>Adopt {name} now</Button>
            ) : (
                <>
                    <Button onClick={handleMessage}>Adopt {name} now</Button>
                </>
            )}
            <ModalComponent show={show} setShow={setShow} body={body} title={title} ></ModalComponent>

        </>

    )
}

export default ApplicationNavigate