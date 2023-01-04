import { useRouter } from 'next/router'
import Wrapper from '../../../components/wrapper'

export default function Bussines() {
  const Router = useRouter()
  const { bussinesID } = Router.query
  console.log(bussinesID)
  return (
    <>
      <Wrapper></Wrapper>
    </>
  )
}
