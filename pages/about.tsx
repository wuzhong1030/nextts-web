import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { ReactElement } from 'react'

interface IProps {
  name?: string;
  test: string;
}

const AboutPage: NextPage<IProps> = (props): ReactElement => {
  const router = useRouter()

  const onClick = () => {
    router.push('/profile')
  }
  return (
    <div>
      <h2>AboutPage</h2>
      <button onClick={onClick}>To profile page</button>
      <h4>{props.test}</h4>
    </div>
  )
}

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello promise')
    }, 10)
  })
}

export async function getStaticProps() {
  const result = await fetchData();
  return {
    props: {
      test: result,
    }, // will be passed to the page component as props
  }
}

export default AboutPage
