import { NextPage } from 'next'
import Link from "next/link"
import type { FunctionComponent, ReactElement, ReactNode } from 'react'
import Sidebar from "../../components/layouts/Sidebar"

interface IProps {
  Layout: (page: ReactElement) => ReactElement
}

// type NextPageWithLayout = IProps & {
//   getLayout?: (page: ReactElement) => ReactNode
// }

const ProfilePage: FunctionComponent<IProps> = (props): ReactElement => {
  return (
    <div>
      <h2 className="text-lg">ProfilePage</h2>
      <Link href="/profile/setting">to setting</Link>
    </div>
  )
}

ProfilePage.Layout = Sidebar

export default ProfilePage
