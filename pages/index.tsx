import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { EyeExternal } from '@/components/Eye'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/about">to about</Link>
      <EyeExternal />
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={72} />
    </div>
  )
}

export default Home
