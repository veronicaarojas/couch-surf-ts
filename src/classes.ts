import type { Review } from "./interfaces"

export class MainProperty {
  reviews: Review[]
  src: string
  title: string
  constructor(src : string, title: string, reviews : Review[]) {
    this.reviews = reviews
    this.src = src
    this.title = title
  }
}