import { env } from "app/config/env"
import { revalidatePath } from "next/cache"

export async function POST(request: Request) {
  const body = await request.json()
  const { Path, token } = body

  if (!Path || !token) {
    return Response.json({ error: 'Missing Path or token' }, { status: 400 })
  }

  if (token !== env.CACHE_TOKEN) {
    return Response.json({ error: 'Invalid token' }, { status: 401 })
  }

  revalidatePath(Path)

  return Response.json({ succes: true })
}