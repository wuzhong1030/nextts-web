import { NextPage } from 'next'
import Link from 'next/link'
import type { FC, FunctionComponent, ReactElement, ReactNode } from 'react'
import Sidebar from '../../components/layouts/Sidebar'

export default function SettingPage() {
  return (
    <div>
      <h2 className="text-lg">SettingPage</h2>
      <Link href="/">To home</Link>
    </div>
  )
}

SettingPage.Layout = Sidebar
