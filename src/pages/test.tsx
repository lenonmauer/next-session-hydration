import type { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'

import { useServerData } from '../ServerDataProvider'
import { getSessionFromRequest } from '../utils/session'

const TestPage: NextPage = () => {
  const { user } = useServerData()

  return (
    <>
      <h1>Hello, {user?.name}</h1>

      <Link href="/">Ir para página home</Link>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = getSessionFromRequest(ctx)

  return {
    props: {
      ...session,
    },
  }
}

export default TestPage
