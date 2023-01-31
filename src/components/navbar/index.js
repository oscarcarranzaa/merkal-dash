import axios from 'axios'
import NavWrapper from './navbar'
import { userData } from 'redux/states/user'
import { useDispatch } from 'react-redux'

export default function Navbar() {
  const dispatch = useDispatch()

  axios({
    method: 'get',
    url: '/login',
    withCredentials: true
  }).then((res) => {
    dispatch(userData(res.data))
  })
  return (
    <>
      <NavWrapper />
    </>
  )
}
