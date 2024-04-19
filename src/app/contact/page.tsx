
import React from 'react'
import { Metadata } from 'next';
import ContactComponent from '@/components/ContactComponent/ContactComponent';
import ContactAnimationComponent from '@/components/ContactAnimationComponent/ContactAnimationComponent';
import styles from './page.module.css'
export const metadata: Metadata = {
  title: 'Contact us - Pet Sanctuary',
}

function Page() {


  return (
    <div className={styles.container}>
      <ContactComponent />
      <ContactAnimationComponent />
    </div>
  )
}

export default Page