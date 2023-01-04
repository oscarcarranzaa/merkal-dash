import Link from 'next/link'
import ChatIcon from '../icons/chat'
import MerkalLogo from '../icons/merkal'

export default function NavbarLogin() {
  return (
    <>
      <header className="bg-white flex justify-center">
        <div className="w-8/12 flex justify-between items-center p-2">
          <div>
            <Link href={'/'}>
              <a>
                <MerkalLogo />
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <div>
              <ChatIcon size={32} />
            </div>
            <p className="font-semibold ml-2 text-slate-800 hover:text-black">
              Contacto
            </p>
          </div>
        </div>
      </header>
    </>
  )
}
