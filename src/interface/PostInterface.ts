import { AuthorInterface } from './AuthorInterface'
import { ContentInterface } from './ContentInterface'

export interface PostInterface {
  id: number
  author: AuthorInterface
  publishedAt: Date
  content: ContentInterface[]
}
