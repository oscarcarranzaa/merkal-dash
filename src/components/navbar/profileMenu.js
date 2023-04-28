import Image from 'next/image'
import AccountCircleSVG from '../icons/accountCircle'
import LogOff from '../icons/logOff'

export default function ProfileMenu({ image, name, id }) {
  return (
    <>
      <div className="bg-slate-50 border border-slate-200 w-72 p-2 rounded-md">
        <div className="p-2">
          <div className="flex items-center">
            <div className="rounded-full overflow-hidden w-12 h-12">
              <Image src={image} width={48} height={48} />
            </div>
            <div className="ml-3 ">
              <p className="font-semibold">{name}</p>
              <p className="text-xs -mt-1">
                <span>ID: </span>
                {id}
              </p>
            </div>
          </div>
          <hr className="mt-3 mb-3" />
          <div className="flex items-center hover:bg-slate-200 p-2 pt-1 pb-1 rounded">
            <div>
              <AccountCircleSVG size={24} />
            </div>
            <p className="ml-2 font-semibold">Perfil</p>
          </div>
          <div className="flex items-center hover:bg-slate-200 p-2 pt-1 pb-1 rounded mt-1">
            <div>
              <LogOff size={24} />
            </div>
            <p className="ml-2 font-semibold">Cerrar sesión</p>
          </div>
        </div>
      </div>
    </>
  )
}
