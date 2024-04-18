"use client"
import React from 'react'
import styles from './page.module.css'
import { Container } from 'react-bootstrap'

function page() {
    return (
        <Container>
            <div className={styles.container}>
                <h1 style={{ color: "white" }}> Privacy Notice</h1>
                <p style={{ color: "white", marginTop: "20px" }}> V 2024-02. Published 12 Febrary 2024</p> <br></br>
                <p style={{ color: "white" }}> At Pet Sanctuary, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly.
                    This Privacy Notice describes how we collect, use, and protect your personal information when you visit our website or interact with us.</p>

                <h2 style={{ color: "white", marginTop: "70px" }}> Information We Collect </h2>
                <p> &#8226; Personal Information: When you register for an account, make a purchase, or contact us,
                    we may collect personal information such as your name,
                    email address, phone number, and address.
                </p>
                <p>
                    &#8226; Pet Adoption Information: If you apply for pet adoption or inquire about our adoptable pets,
                    we may collect information about your preferences, lifestyle, and previous pet ownership.
                </p>
                <p>
                    &#8226; Website Usage Data: We may collect data about your interactions with our website, including pages visited, time spent on each page, and referral sources.
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}> How We Use Your Information </h2>
                <p>
                    &#8226; Pet Adoption Services: We use your personal information to facilitate the pet adoption process,
                    including matching you with suitable pets, scheduling adoption appointments, and processing adoption paperwork.
                </p>
                <p>
                    &#8226; Customer Support: We may use your information to respond to inquiries, provide customer support, and address any concerns you may have.
                </p>
                <p>
                    &#8226; Marketing Communications: With your consent, we may send you promotional emails, newsletters, or updates about our products, services, and events.
                </p>
                <p>
                    &#8226; Improving Our Services: We analyze website usage data to improve our website design, functionality, and user experience.
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}> Information Sharing and Disclosure </h2>
                <p>
                    &#8226; Service Providers: We may share your personal information with third-party service providers who
                    assist us in providing our services, such as payment processors, shipping companies,
                    and IT service providers.
                </p>
                <p>
                    &#8226; Legal Compliance: We may disclose your information when required by law or in response to legal requests, such as court orders or subpoenas.
                </p>
                <p>
                    &#8226; Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to a successor entity.
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}> Data Security </h2>
                <p>
                    &#8226; We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                    We use encryption, firewalls, and other security technologies to safeguard your data.
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}> Your Choices and Rights </h2>
                <p>
                    &#8226; Access and Correction: You have the right to access and correct your personal information. You can update your account information
                    or contact us to request access to your data.
                </p>
                <p>
                    &#8226; Opt-Out: You can opt out of receiving marketing communications from us by following the unsubscribe instructions included in our
                    emails or by contacting us directly.
                </p>
                <p>
                    &#8226; Data Deletion: You can request the deletion of your personal information from our systems, subject to legal requirements and legitimate business purposes.
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}> Your Choices and Rights </h2>
                <p>
                    &#8226; If you have any questions, concerns, or requests regarding this Privacy Notice or our data practices, please contact us at AndrewLu1029@gmail.com or 604-506-1132.
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}> Updates to this Privacy Notice </h2>
                <p>
                    &#8226;  We may update this Privacy Notice from time to time to reflect changes in our data practices or legal
                    requirements. We encourage you to review this page periodically for updates.
                </p>
            </div>


        </Container>
    )
}

export default page