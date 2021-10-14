import Avatar from 'components/avatar'
import Date from 'components/date'
import CoverImage from 'components/cover-image'
import PostTitle from 'components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="md:mb-8 flex gap-6 items-center flex-row">
        <Avatar name={author.name} picture={author.picture} />
        <Date dateString={date} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
    </>
  )
}
