import { shopifyUrls } from "./urls"
import { env } from "app/config/env"

export const getProducts = async (id?: string) => {
  try {
    const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all
    const response = await fetch(apiUrl, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_TOKEN
      })
    })
    const { products } = await response.json()

    const transformedProducts = products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      }
    })

    return transformedProducts
  } catch (error) {
    console.log(error)
  }
}

export const getMainProducts = async () => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: new Headers({
      'X-Shopify-Access-Token': env.SHOPIFY_API_TOKEN
    }),
    //cache: 'no-cache'
    cache: 'force-cache', // by default
    next: {
      tags: ['main-products']
    }
    /*
    next: {
      revalidate: 10 //update in 10 sec 
    }
    */
  })

  const { products } = await response.json()

  return products
}