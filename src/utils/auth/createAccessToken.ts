import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreateMutation"
import { cookies } from "next/headers"

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies()
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const { customerAccessTokenCreate } = await graphqlClient.request(customerAccessTokenCreateMutation, {
    email: email, password: password
  })

  const { accesToken, expiresAt } = customerAccessTokenCreate?.customerAccessToken

  if (accesToken) {
    cookiesStore.set("accessToken", accesToken, {
      path: '/',
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: "strict"
    })
  }
}