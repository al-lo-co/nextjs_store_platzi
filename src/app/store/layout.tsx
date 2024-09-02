import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"
import styles from './StoreLayout.module.scss'
import { ChatLink } from "app/components/Store/ChatLink/ChatLink"

export const runtime = "edge";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections() // pararell call endpoints

  return (
    <main className={styles.StoreLayout}>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {
            collections.map((collection: any) => (
              <Link key={collection.id} href={'/store/' + collection.handle} className={styles.StoreLayout__chip}>
                {collection.title}
              </Link>
            ))
          }
        </ul>
        <ChatLink />
      </nav>
      {children}
    </main>
  )
}