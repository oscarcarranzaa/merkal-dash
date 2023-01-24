import Image from 'next/image'
import Link from 'next/link'
import FavoriteActiveSVG from '../icons/favoriteActive'

export default function HorizontalGrid({ image }) {
  return (
    <>
      <div>
        <div>
          <div>
            <div className="flex items-center p-2 pl-10 pr-10 rounded-md bg-white">
              <div className="mr-2">
                <button>
                  <FavoriteActiveSVG size={20} color={'#ffc900'} />
                </button>
              </div>
              <figure className="w-14 rounded-full overflow-hidden">
                <Image
                  src={image}
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </figure>
              <div className="flex justify-between items-center w-full h-full">
                <Link
                  href={'/enterprises/[bussinesID]'}
                  as="/enterprises/ACCHND-GXT6745"
                >
                  <a className="font-semibold hover:underline">
                    Accmovil Honduras
                  </a>
                </Link>
                <div className="flex justify-center items-center">
                  <Link
                    href={'/enterprises/[bussinesID]'}
                    as="/enterprises/ACCHND-GXT6745"
                  >
                    <a className="p-1 pl-3 pr-3 border rounded-md text-sm bg-[color:var(--merk-color)] text-white hover:bg-indigo-600">
                      Detalles
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
