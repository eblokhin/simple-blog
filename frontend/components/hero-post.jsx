import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="md:flex justify-between items-stretch md:gap-8">
      <div className="mb-5 md:mb-0 md:w-1/3 lg:w-1/2 md:flex-shrink-0">
        <CoverImage title={title} url={coverImage.url} slug={slug} />
      </div>
      <div className="md:flex-initial">
        <div className="mb-1 text-xs text-gray-500">
          <Date dateString={date} />
        </div>
        <h2 className="mb-2 text-4xl lg:text-6xl leading-tight">
          <Link href={`/posts/${slug}`}>
            <a className="hover:underline">Typescript и его преимущества в разных environment</a>
          </Link>
        </h2>
        <p className="text-sm leading-relaxed mb-4">{excerpt}</p>
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
    </section>
  )
}
