// const DefaultLayout = ({ children }) => ({ children })

// export default DefaultLayout

import { NextPage } from 'next'
import { ReactElement } from 'react'

interface IProps {}

const DefaultLayout: NextPage<IProps> = (props): ReactElement => {
  return <div>{props.children}</div>
}

export default DefaultLayout
