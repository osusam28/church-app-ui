import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div>
        <a href="/api/auth/login">Login</a>
      </div>
      <div>
        <a href="/api/auth/logout">Logout</a>
      </div>
      <div>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </div>
      <div>
        <Link href="/directory">
          <a>Directory</a>
        </Link>
      </div>
    </div>
  )
}
