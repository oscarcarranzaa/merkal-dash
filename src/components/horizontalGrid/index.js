import Image from 'next/image'
import Link from 'next/link'

export default function HorizontalGrid({ image }) {
  return (
    <>
      <div>
        <div>
          <div>
            <div className="flex p-1 pr-5 rounded-md">
              <figure className="w-20 rounded-md overflow-hidden">
                <Image
                  src={image}
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </figure>
              <div className="flex justify-between w-full">
                <div>
                  <h5 className="font-bold">Accmovil HND</h5>
                  <p className="text-sm line-clamp-2">
                    Tienda de accesorios móviles y reparaciones con 4 sucursales
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Link href={'/enterprises#'}>
                    <a className="p-1 pl-3 pr-3 border rounded-md text-sm bg-indigo-700 text-white hover:bg-indigo-600">
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
