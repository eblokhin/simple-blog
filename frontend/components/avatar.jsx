import Image from 'next/image'

export default function Avatar({ name, picture }) {
  const url = picture.url ?? picture[0].url

  return (
    <div className="flex items-center">
      <div className="w-8 h-8 relative mr-4">
        <Image
          src={`${
            url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
          }${url}`}
          width="32"
          height="32"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-sm font-bold">{name}</div>
    </div>
  )
}
