import axios from 'axios'
import NavWrapper from './navbar'
import { userData } from 'redux/states/user'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Navbar() {
  const dispatch = useDispatch()
  const userSelector = useSelector((store) => store.user)

  useEffect(() => {
    if (userSelector.email !== '') return
    axios({
      method: 'get',
      url: '/login',
      withCredentials: true
    }).then((res) => {
      dispatch(userData(res.data.response))
    })
  }, [])
  return (
    <>
      <NavWrapper />
    </>
  )
}
