import { ProductView } from "app/components/product/ProductView/ProductView"
import { getProducts } from "app/services/shopify/products"
import { redirect } from "next/navigation" // next/navigation for newer versions

interface ProductPageProps {
  searchParams: {
    id: string
  }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id

  const products = await getProducts(id)

  const product = products[0]

  if (!id) {
    redirect('/store') //server component redirect
  }

  return (
    <ProductView product={product} />
  )
}