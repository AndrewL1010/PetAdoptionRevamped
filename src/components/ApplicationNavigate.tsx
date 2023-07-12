"use client"
import ApplicationNavigateProp from '@/types/ApplicationNavigateProp';
import { Button } from '../components/bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ModalComponent from './ModalComponent';
function ApplicationNavigate(props: ApplicationNavigateProp) {
    const { id, name } = props;
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
    const router = useRouter();
    const handleButton = async (id: number) => {
        const response = await fetch('/api/checkAuth',
            {
                method: "POST"
            }
        );
        const result = await response.json();

        if (result.status === "success") {
            router.push(`/adopt/${id}`);
        }
        else {
            setTitle("Error");
            setBody("Please login first before applying");
            setShow(true);
        }

    }


    return (
        <>
            <Button onClick={() => { handleButton(id) }}>Adopt {name} now</Button>
            <ModalComponent show={show} setShow={setShow} body={body} title={title} ></ModalComponent>

        </>

    )
}

export default ApplicationNavigate