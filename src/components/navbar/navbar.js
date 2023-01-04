import AccountCircleSVG from '../icons/accountCircle'
import BellSVG from '../icons/bell'
import MerkalLogo from '../icons/merkal'
import SearchNav from './search'

export default function NavWrapper() {
  return (
    <>
      <header className="fixed top-0 w-full bg-white">
        <div className="flex justify-between items-center pl-4 pr-4 pt-2 pb-2">
          <div>
            <MerkalLogo />
          </div>
          <div>
            <SearchNav />
          </div>
          <div className="flex">
            <div>
              <BellSVG size={32} />
            </div>
            <div>
              <AccountCircleSVG size={32} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
