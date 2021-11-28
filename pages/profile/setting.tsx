import { NextPage } from 'next'
import Link from 'next/link'
import { ReactElement } from 'react'
import Sidebar from "../../components/layouts/Sidebar"

interface IProps {}

const SettingPage: NextPage<IProps> = (props): ReactElement => {
  return (
    <div>
      <h2>SettingPage</h2>
      <Link href="/">To home</Link>
    </div>
  )
}

SettingPage.Layout = Sidebar

export default SettingPage
