import Image from 'next/image'

export default function CardEnterprises({ name, image, id }) {
  return (
    <>
      <div className="">
        <div className="flex items-center">
          <div className="aspect-video h-32 flex justify-center">
            <div className="rounded-full overflow-hidden w-32 h-32">
              <Image width={180} height={180} src={image} />
            </div>
          </div>
          <div className="ml-3 max-w-lg">
            <p className="font-semibold text-xl">{name}</p>
            <p className="line-clamp-2 text-sm">
              Somos una empresa dedicada al rubro ventas de accesorios moviles,
              con nuestra sucursal en Tegucigalpa, Honduras.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
