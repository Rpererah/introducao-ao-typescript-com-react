import { PostInterface } from '../interface/PostInterface'
import api from '../lib/axios'

export async function createPost({
  author,
  content,
  publishedAt,
}: PostInterface) {
  await api.post('/posts', { author, content, publishedAt })
}
