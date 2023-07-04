/* eslint-disable react/no-unescaped-entities */
import { Container } from '../../components/bootstrap';
import styles from "./page.module.css";
function Page() {
    return (
        <Container className={styles.container}>
            <div>
                1. Browse Available Pets: Start by visiting the website and browsing the available pets.
                You can filter your search based on factors like species, breed, age, and location to
                find animals that match your preferences.
            </div>
            <div>
                2. Learn About the Pet: Click on the pet's profile to access detailed information. This
                includes the animal's name, age, breed, personality traits, medical history, and any specific
                requirements. Take your time to understand the pet's needs and consider if it aligns with your
                lifestyle.
            </div>

            <div>
                3. Contact the Shelter/Rescue: If you're interested in a particular pet, reach out to the shelter
                or rescue organization responsible for their care. Most websites provide contact information or
                have an inquiry form for potential adopters. Ask any additional questions you may have and express
                your interest in meeting the pet.
            </div>
            <div>
                4. Schedule a Meet and Greet: The shelter or rescue will arrange a time for you to meet the pet in person.
                This step allows you to interact with the animal, observe their behavior, and see if there's a connection.
                It's also an opportunity to ask more questions and seek advice from the staff.
            </div>
            <div>
                5.Adoption Application: If you decide to proceed with the adoption, you'll need to complete an adoption application.
                This form collects essential information about you, your living situation, and your experience with pets. Some
                organizations may require references or a home visit as part of the application process.
            </div>
            <div>
                6. Application Review: The shelter/rescue will review your application to ensure it meets their criteria. They may
                contact your references or conduct a background check. This step helps ensure that the adopted pet will be going to
                a responsible and suitable home.
            </div>
            <div>
                7. Adoption Fee and Contract: If your application is approved, you will be required to pay an adoption fee. The fee typically
                covers the cost of vaccinations, spaying/neutering, microchipping, and other medical expenses incurred by the organization.
                You'll also need to sign an adoption contract, which outlines your responsibilities as a pet owner.
            </div>
            <div>
                8. Taking Your Pet Home: Once the adoption fee is paid and the contract is signed, you can bring your new pet home!
                The shelter/rescue will provide you with any necessary documents, such as vaccination records and a microchip registration
                form. They may also offer guidance on transitioning the pet to its new environment and provide information on training,
                feeding, and healthcare.
            </div>
            <div>
                9. Post-Adoption Support: Many shelters and rescues provide post-adoption support. They are available to answer any questions
                or concerns you may have after bringing your pet home. Some organizations also offer training classes, behavioral support,
                or additional resources to help you and your new companion adjust to your life together.
            </div>



        </Container>
    )
}

export default Page