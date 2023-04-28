import BellSVG from '../icons/bell'
import MerkalLogo from '../icons/merkal'
import SearchNav from './search'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import ProfileMenu from './profileMenu'
import { useState, useRef } from 'react'
import useOutsideClick from 'hooks/useOutSideClick'

export default function NavWrapper() {
  const [openProfileMenu, setOpenProfileMenu] = useState(false)
  const ref = useRef()

  useOutsideClick(ref, () => setOpenProfileMenu(false))
  const userState = useSelector((store) => store.user)
  // console.log(userState.photo[0].url)
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white">
        <div className="flex justify-between items-center pl-4 pr-4 pt-2 pb-2">
          <div>
            <MerkalLogo />
          </div>
          <div>
            <SearchNav />
          </div>
          <div className="flex items-center">
            <div>
              <BellSVG size={24} />
            </div>
            <div className="ml-2 relative">
              <div ref={ref}>
                <div
                  className="rounded-full overflow-hidden w-8 h-8"
                  onClick={() => setOpenProfileMenu(!openProfileMenu)}
                >
                  {userState.email !== '' && (
                    <Image
                      src={userState.photo[0].url}
                      width={96}
                      height={96}
                    />
                  )}
                </div>
                <div
                  className={`absolute top-10 right-0 ${
                    openProfileMenu ? 'block' : 'hidden'
                  }`}
                >
                  {userState.email !== '' && (
                    <ProfileMenu
                      image={userState.photo[0].url}
                      name={userState.firtName}
                      id={userState.merkUserId}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
