/* eslint-disable react/no-unescaped-entities */
import styles from './page.module.css';
import { Container } from '../../components/bootstrap';
import { Metadata } from 'next';
import FAQItem from '@/components/FAQItem/FAQItem';
export const metadata: Metadata = {
    title: 'FAQ - Pet Sanctuary',
}
const faqList = [
    {
        id: 1,
        title: "1. How does the pet adoption process work?",
        body: `Welcome to our Pet Adoption Company's FAQ page! Here,
        we've compiled a list of common questions and their answers
        to help you better understand our adoption process and the
        services we offer. If you can't find the information you're looking for,
        please don't hesitate to contact us directly. We're here to assist you in
        finding the perfect companion!`
    },
    {
        id: 2,
        title: "2. What types of pets do you have available for adoption?",
        body: `Our pet adoption process is designed to ensure a successful match between
        pets and their new owners. It typically involves filling out an application,
        meeting potential pets, and completing an adoption contract. Specific steps may
        vary, but our knowledgeable staff will guide you through the entire process.`
    },
    {
        id: 3,
        title: "3. Are the animals at your facility healthy and up-to-date on vaccinations?",
        body: `Yes, all pets available for adoption are thoroughly examined by a veterinarian,
        receive necessary vaccinations, and are spayed or neutered before they become
        eligible for adoption. We prioritize the health and well-being of our animals.`
    },
    {
        id: 4,
        title: "4. What are the adoption fees, and what do they cover?",
        body: ` Adoption fees vary depending on the type of pet and any additional services provided.
        These fees help cover the cost of veterinary care, vaccinations, spaying/neutering,
        microchipping, and other necessary procedures to ensure the animal's welfare.`
    },
    {
        id: 5,
        title: "5. Can I reserve a pet before visiting your facility?",
        body: `We do not offer pet reservations. Since the availability of pets changes frequently,
        we encourage you to visit our facility in person to meet the animals and begin the
        adoption process.`
    },
    {
        id: 6,
        title: "6. Do you offer post-adoption support and resources?",
        body: `Welcome to our Pet Adoption Company's FAQ page! Here,
        we've compiled a list of common questions and their answers
        to help you better understand our adoption process and the
        services we offer. If you can't find the information you're looking for,
        please don't hesitate to contact us directly. We're here to assist you in
        finding the perfect companion!`
    },
    {
        id: 7,
        title: "7. What requirements do you have for potential adopters?",
        body: `Absolutely! We believe in providing ongoing support to our adopters. We offer resources
        on pet care, training tips, and behavior advice. Additionally, our team is available to
        address any questions or concerns you may have even after the adoption is complete.`
    },
    {
        id: 8,
        title: "8. Can I return an adopted pet if it doesn't work out?",
        body: `We understand that sometimes circumstances change, and a pet may not be the right fit
        for your family. We have a return policy in place, but we encourage adopters to thoroughly
        consider their decision and give the pet adequate time to adjust before initiating a return.`
    },
    {
        id: 9,
        title: "9. How often do you receive new animals for adoption?",
        body: `The availability of new animals can vary depending on several factors, including the number of
        animals in our care, rescues from other organizations, and owner surrenders. We regularly update
        our website and social media platforms to showcase new arrivals, so keep an eye out for the latest
        additions!`
    },
]
function Page() {
    return (
        <>

            <Container className={styles.parentcontainer}>


                <div className={styles.container}>
                    <div className={`border border-primary ${styles.child}`}>
                        <h1>Frequently Asked Questions</h1>
                        <div>
                            Welcome to our Pet Adoption Company's FAQ page! Here,
                            we've compiled a list of common questions and their answers
                            to help you better understand our adoption process and the
                            services we offer. If you can't find the information you're looking for,
                            please don't hesitate to contact us directly. We're here to assist you in
                            finding the perfect companion!
                        </div>
                    </div>
                    <div className={styles.faqContainer}>
                        {faqList.map((item) => (
                            <FAQItem title={item.title} body={item.body} key={item.id}></FAQItem>
                        ))

                        }
                    </div>



                    <div className={`border border-primary ${styles.child}`}>
                        We hope this FAQ section has provided you with helpful information about our pet adoption company.
                        If you have any additional questions or concerns, please feel free to reach out to our dedicated staff.
                        Thank you for considering adoption and for your interest in our organization!
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Page