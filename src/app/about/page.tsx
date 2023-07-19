import { Container } from "../../components/bootstrap"
import styles from './page.module.css';
import { Metadata } from "next";
import ImageComponent from "@/components/ImageComponent/ImageComponent";

export const metadata: Metadata = {
    title: 'About us - Pet Sanctuary',
}
function page() {
    return (
        <Container>
            <div className={styles.container}>
                <div className={styles.imagecontainer}>
                    <ImageComponent path={'/petowner.webp'} alt="pet-owner" width={700} height={500} small={false}></ImageComponent>
                </div>
                <h2>Our Contribution</h2>
                <p>At our pet adoption company, we are dedicated to finding loving homes for animals in need.
                    Yearly, we conduct extensive adoption drives, community outreach programs,
                    and partnerships with local shelters and rescue organizations.
                    Our team tirelessly works to raise awareness about responsible pet ownership and the benefits of adoption.
                </p>

                <p>In the past year, we achieved remarkable statistics in our efforts.
                    We facilitated the adoption of over <strong> 1,000 pets</strong>,
                    providing them with a second chance at happiness. Our dedicated team
                    of volunteers and staff members contributed a combined total of over
                    <strong> 5,000 hours</strong> to ensure the well-being of our furry friends.
                </p>

                <p>Additionally, our community engagement initiatives reached over
                    <strong> 10,000 individuals</strong> through educational campaigns,
                    workshops, and adoption events. These efforts resulted in a significant
                    reduction in the number of homeless pets in our area, making a positive
                    impact on animal welfare.
                </p>

                <p>We are proud to report that our adoption success rate stood at an impressive
                    <strong> 90%</strong>, reflecting the careful matchmaking process and thorough
                    screening procedures we follow to ensure the best possible matches between pets
                    and adopters. This high success rate demonstrates our commitment to finding forever
                    homes where both the pets and their new families can thrive.
                </p>

                <p>As we look ahead, we aim to continue our mission of promoting pet adoption,
                    expanding our network of partner organizations, and improving the lives of
                    countless more animals. Together, we can make a lasting difference in the
                    lives of these deserving creatures and create a compassionate community that
                    values the well-being of all animals.
                </p>
            </div>
            <div className={styles.container}>
                <div className={styles.imagecontainer}>
                    <ImageComponent path={'/ceo.jpg'} alt="ceo" width={700} height={500} small={false}></ImageComponent>
                </div>
                <h2>Introducing our esteemed CEO, John Peterson</h2>
                <p>A visionary leader who has played a pivotal role in driving our pet adoption company
                    to new heights. With a deep passion for animal welfare and a wealth of experience in the field,
                    John has made significant contributions to our organization and the community.
                </p>
                <p>John&apos;s unwavering dedication to the well-being of animals has been the driving force behind our
                    successful adoption drives, community outreach programs, and partnerships. His strategic vision
                    and leadership have propelled our company&apos;s growth, enabling us to make a substantial impact on
                    reducing pet homelessness.
                </p>
                <p>Under John&apos;s guidance, we have witnessed remarkable achievements, including facilitating the adoption
                    of thousands of pets, ensuring they find loving forever homes. His commitment to finding the perfect
                    match between pets and adopters has resulted in an impressive adoption success rate, providing countless
                    animals with a chance at a joyful life.
                </p>
                <p>Recognizing the importance of education, John has spearheaded various initiatives to raise awareness about
                    responsible pet ownership and the benefits of adoption. Through his guidance, we have reached thousands of
                    individuals through educational campaigns, workshops, and adoption events, instilling a sense of compassion
                    and empathy within the community.
                </p>
                <p>Beyond his contributions within our company, John has actively engaged with local shelters, rescue organizations,
                    and animal welfare advocates. He has been instrumental in forging partnerships, fostering collaborations,
                    and amplifying the collective impact of our efforts to create a compassionate community that values and
                    protects the well-being of all animals.
                </p>
                <p>John&apos;s leadership, compassion, and tireless dedication have made a lasting impact on our organization
                    and the lives of countless animals. With his guidance, we are poised to continue making strides in pet
                    adoption, expanding our reach, and transforming the lives of even more deserving creatures.
                </p>
            </div>
        </Container>
    )
}

export default page