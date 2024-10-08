//"use client" useParams and useSearchParams for client component 

import { ProductView } from "app/components/product/ProductView/ProductView"
import { getProducts } from "app/services/shopify/products"
import { redirect, useParams, useSearchParams } from "next/navigation" // next/navigation for newer versions
interface ProductPageProps {
  searchParams: { //server component
    id: string
  }
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const id = searchParams.id

  const products = await getProducts(id) //memoization in fetch, not two calls in fact

  const product = products[0]

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image]
    }
  }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  //const params = useParams() //hook and not async
  //const uSearchParams = useSearchParams()

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