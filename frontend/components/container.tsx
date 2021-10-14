import type { FC, HTMLAttributes } from "react"

type TContainer = FC<HTMLAttributes<HTMLDivElement>>

const Container: TContainer = ({ children }) => {
  return <div className="container max-w-5xl mx-auto px-5 py-10">{children}</div>
}

export default Container
