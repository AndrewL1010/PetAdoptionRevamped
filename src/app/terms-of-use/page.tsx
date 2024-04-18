"use client"
import React from 'react'
import styles from './page.module.css'
import { Container } from 'react-bootstrap'

function page() {
    return (
        <Container>
            <div className={styles.container}>
                <h1 style={{ color: "white" }}>Terms of Use</h1>
                <p style={{ color: "white", marginTop: "20px" }}>Last Updated: [Insert Date]</p>

                <h2 style={{ color: "white", marginTop: "70px" }}>Acceptance of Terms</h2>
                <p>
                    &#8226; By accessing or using our website, you agree to be bound by these Terms of Use.
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}>Intellectual Property Rights</h2>
                <p>
                    &#8226; The content on this website, including text, images, logos, and graphics, is protected by intellectual property laws and is the property of Pet Sanctuary.
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}>Prohibited Activities</h2>
                <p>
                    &#8226; You agree not to engage in any unauthorized use of this website, including but not limited to hacking, scraping, or transmitting viruses.
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}>Limitation of Liability</h2>
                <p>
                    &#8226; Pet Sanctuary shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of this website.
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}>Indemnification</h2>
                <p>
                    &#8226; You agree to indemnify and hold Pet Sanctuary harmless from any claims, damages, or losses arising out of your use of this website.
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}>Governing Law</h2>
                <p>
                    &#8226; These Terms of Use shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}>Changes to Terms</h2>
                <p>
                    &#8226; Pet Sanctuary reserves the right to update or modify these Terms of Use at any time without prior notice.
                </p>

                <h2 style={{ color: "white", marginTop: "70px" }}>Contact Us</h2>
                <p>
                    &#8226; If you have any questions or concerns about these Terms of Use, please contact us at [Your Contact Information].
                </p>
            </div>
        </Container>
    )
}

export default page