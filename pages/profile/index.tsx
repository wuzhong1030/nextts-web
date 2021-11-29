import Link from 'next/link'
import Sidebar from '@/components/layouts/Sidebar'
import WechatLogin from '@/components/wechat/Login'
export default function ProfilePage() {
  return (
    <div>
      <h2 className="text-lg">ProfilePage</h2>
      <Link href="/profile/setting">to setting</Link>
      <WechatLogin />
    </div>
  )
}

ProfilePage.Layout = Sidebar
