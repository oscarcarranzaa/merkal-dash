import useFetch from 'hooks/useFetch'
import { useRouter } from 'next/router'
import Wrapper from '../../../components/wrapper'

export default function Bussines() {
  const Router = useRouter()
  const { bussinesID } = Router.query
  const { data, loading } = useFetch('/enterprise')
  console.log(data)
  console.log(bussinesID)
  return (
    <>
      <Wrapper>
        <h1>{!loading && data.name}</h1>
      </Wrapper>
    </>
  )
}
