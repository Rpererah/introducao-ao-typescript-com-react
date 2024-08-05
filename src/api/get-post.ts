import { PostInterface } from '../interface/PostInterface'
import api from '../lib/axios'

export async function getPost(): Promise<PostInterface[]> {
  const response = await api.get<PostInterface[]>('/posts')

  return response.data
}
