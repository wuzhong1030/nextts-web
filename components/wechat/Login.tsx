import type { FC, ReactElement } from 'react'
import Script from 'next/script'

declare var window: Window & { WwLogin: any }

const Login: FC<{}> = (): ReactElement => {
  return (
    <>
      <Script
        id="wechat-login-script"
        src="http://wwcdn.weixin.qq.com/node/wework/wwopen/js/wwLogin-1.2.4.js"
        onLoad={() => {
          console.log('window.WwLogin', window.WwLogin)
          new window.WwLogin({
            id: 'wx-qrcode',
            appid: 'wxa9620b5ef89b55d4',
            scope: 'snsapi_login',
            redirect_uri: encodeURIComponent('https://www.ligongku.com'),
            state: 'snsapi',
            self_redirect: false,
            style: '',
            href: 'data:text/css;base64,QGNoYXJzZXQgIlVURi04IjsKLmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDE2MHB4O2hlaWdodDogMTYwcHg7YmFja2dyb3VuZDogcmVkO30KLmltcG93ZXJCb3ggLnRpdGxle2Rpc3BsYXk6IG5vbmU7fQouaW1wb3dlckJveCAuc3RhdHVze2Rpc3BsYXk6IG5vbmU7fQouc3RhdHVzX2ljb257ZGlzcGxheTogbm9uZTt9',
          })
        }}
      />
      <div id="wx-qrcode"></div>
    </>
  )
}

export default Login
