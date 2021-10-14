import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

import styles from './header.module.css'

const LINKS: Map<string, {title: string, slug: string}> = new Map([
  ['/', {title: 'Main', slug: 'main'}],
  ['/test-category', {title: 'Test Category', slug: 'test-category'}],
  ['/sign-in', {title: 'Sign In', slug: 'sign-in'}]
])

export default function HeaderV2() {
  const links = []

  const {pathname} = useRouter()

  LINKS.forEach(({title, slug}, path) => {
    const isCurrent = pathname === path // needs some additional testing
    const classNames = [styles.link]

    if (isCurrent) {
      classNames.push(styles.current)
    }
    
    links.push(
      <Link href={path} key={slug}>
        <a className={classNames.join(' ')}>{title}</a>
      </Link>
    )
  })

  return (
    <div className="sticky top-0 bg-white z-10 shadow-inner">
      <div className="px-5 flex flex-row items-center container mx-auto space-x-8">
        <div className="w-32 h-32 flex-none">
          <Link href="/">
            <a>
              <Image width="128" height="128" src="/owl_image.jpg" />
            </a>
          </Link>
        </div>
        <div>
          <h1 className="text-6xl leading-tight font-bold">
            <Link href="/"><a className="hover:underline focus:underline">Blog name</a></Link>
          </h1>
          <p className="text-sm">
            A statically generated blog example using Next.js and Strapi.
          </p>
        </div>
        <nav className="flex flex-auto text-lg space-x-8 font-bold justify-end">
          {links}
        </nav>
      </div>
    </div>
  )
}
