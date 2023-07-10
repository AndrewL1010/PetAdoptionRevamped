/* eslint-disable react/no-unescaped-entities */
import styles from './page.module.css';
import { Container } from '../../components/bootstrap';
import Link from 'next/link';
function Page() {
    return (
        <>
            <div className={styles.linkcontainer}>
                <a href='#1'> 1. How does the pet adoption process work?</a>
                <a href='#2'> 2. What types of pets do you have available for adoption?</a>
                <a href='#3'> 3. Are the animals at your facility healthy and up-to-date on vaccinations?</a>
                <a href='#4'> 4. What are the adoption fees, and what do they cover?</a>
                <a href='#5'> 5. Can I reserve a pet before visiting your facility?</a>
                <a href='#6'> 6. Do you offer post-adoption support and resources?</a>
                <a href='#7'> 7. What requirements do you have for potential adopters?</a>
                <a href='#8'> 8. Can I return an adopted pet if it doesn't work out?</a>
                <a href='#9'> 9. How often do you receive new animals for adoption?</a>
            </div>
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

                    <div id='1' className={`border border-primary ${styles.child}`}>
                        <h3 className={styles.header} >1. How does the pet adoption process work?</h3>
                        <div>
                            Our pet adoption process is designed to ensure a successful match between
                            pets and their new owners. It typically involves filling out an application,
                            meeting potential pets, and completing an adoption contract. Specific steps may
                            vary, but our knowledgeable staff will guide you through the entire process.
                        </div>
                    </div>

                    <div id='2' className={`border border-primary ${styles.child}`}>
                        <h3 className={styles.header}>2. What types of pets do you have available for adoption?</h3>
                        <div>
                            We offer a diverse range of pets for adoption, including dogs, cats, rabbits,
                            guinea pigs, birds, and sometimes even small reptiles or exotic animals. We strive
                            to have a variety of breeds, ages, and sizes to meet the preferences of potential adopters.
                        </div>
                    </div>

                    <div id='3' className={`border border-primary ${styles.child}`}>
                        <h3 className={styles.header}>3. Are the animals at your facility healthy and up-to-date on vaccinations?</h3>
                        <div>
                            Yes, all pets available for adoption are thoroughly examined by a veterinarian,
                            receive necessary vaccinations, and are spayed or neutered before they become
                            eligible for adoption. We prioritize the health and well-being of our animals.
                        </div>
                    </div>

                    <div id='4' className={`border border-primary ${styles.child}`}>
                        <h3 className={styles.header}>4. What are the adoption fees, and what do they cover?</h3>
                        <div>
                            Adoption fees vary depending on the type of pet and any additional services provided.
                            These fees help cover the cost of veterinary care, vaccinations, spaying/neutering,
                            microchipping, and other necessary procedures to ensure the animal's welfare.
                        </div>
                    </div>
                    <div id='5' className={`border border-primary ${styles.child}`}>
                        <h3 className={styles.header}>5. Can I reserve a pet before visiting your facility?</h3>
                        <div>
                            We do not offer pet reservations. Since the availability of pets changes frequently,
                            we encourage you to visit our facility in person to meet the animals and begin the
                            adoption process.
                        </div>
                    </div>
                    <div id='6' className={`border border-primary ${styles.child}`}>
                        <h3 className={styles.header}>6. Do you offer post-adoption support and resources?</h3>
                        <div>
                            Absolutely! We believe in providing ongoing support to our adopters. We offer resources
                            on pet care, training tips, and behavior advice. Additionally, our team is available to
                            address any questions or concerns you may have even after the adoption is complete.
                        </div></div>
                    <div id='7' className={`border border-primary ${styles.child}`}>
                        <h3 className={styles.header}>7. What requirements do you have for potential adopters?</h3>
                        <div>
                            We have certain requirements to ensure the well-being of our animals. These typically
                            include a minimum age for adopters, a completed application, identification, and proof
                            of residency. Some pets may have specific requirements based on their needs or characteristics.
                        </div>
                    </div>

                    <div id='8' className={`border border-primary ${styles.child}`}>
                        <h3 className={styles.header}>8. Can I return an adopted pet if it doesn't work out?</h3>
                        <div>
                            We understand that sometimes circumstances change, and a pet may not be the right fit
                            for your family. We have a return policy in place, but we encourage adopters to thoroughly
                            consider their decision and give the pet adequate time to adjust before initiating a return.
                        </div>
                    </div>
                    <div id='9' className={`border border-primary ${styles.child}`}>
                        <h3 className={styles.header}>9. How often do you receive new animals for adoption?</h3>
                        <div>
                            The availability of new animals can vary depending on several factors, including the number of
                            animals in our care, rescues from other organizations, and owner surrenders. We regularly update
                            our website and social media platforms to showcase new arrivals, so keep an eye out for the latest
                            additions!
                        </div>
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