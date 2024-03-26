import ProductComponent from './(ProductsComponent)/ProductsComponent'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Products',
}

function Page() {

    return (
      <ProductComponent/>
    )
}

export default Page