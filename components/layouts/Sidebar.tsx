import Link from 'next/link'
import type { ReactElement } from 'react'

interface IProps {
  children: ReactElement
}

export default function Sidebar({ children }: IProps): ReactElement {
  return (
    <div className="flex">
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
      <div className="content">{children}</div>
    </div>
  )
}
