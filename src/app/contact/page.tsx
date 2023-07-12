
import React from 'react'
import { Metadata } from 'next';
import ContactComponent from '@/components/ContactComponent';
export const metadata: Metadata = {
  title: 'Contact us - Pet Sanctuary',
}

function Page() {


  return (
    <ContactComponent></ContactComponent>
  )
}

export default Page