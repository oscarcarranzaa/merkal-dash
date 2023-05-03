import Image from 'next/image'

export default function CardEnterprises({ name, username, image }) {
  return (
    <>
      <div className="full overflow-hidden">
        <div className="w-full overflow-hidden rounded-md">
          <Image src={image} layout="responsive" width={180} height={180} />
        </div>
        <div>
          <h5 className="text-lg font-semibold line-clamp-1">{name}</h5>
        </div>
        <div className="flex ">
          <p className="text-sm font-medium mr-5 max-w-[250px] overflow-hidden">
            {username}
          </p>
          <p className="text-sm font-medium text-green-600">Activo</p>
        </div>
      </div>
    </>
  )
}
