import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { ContainerPost, Wrapper } from './styles'
import { Post } from './components/Post'
import { PostInterface } from './interface/PostInterface'
import { Button } from './components/Button'
import { getPost } from './api/get-post'
import { useEffect, useState } from 'react'

export default async function App() {
  const [posts, setPost] = useState<PostInterface[]>([])

  async function fetchData() {
    try {
      const postsData = await getPost()
      setPost(postsData)
    } catch (error) {
      console.log('Error fetching posts', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Sidebar />

        <ContainerPost>
          {posts?.map((post) => <Post key={post.id} post={post} />)}
        </ContainerPost>
        <Button variant="red">oi</Button>
        <Button size="large" variant="blue">
          oi2
        </Button>
        <Button size="small">oi small</Button>
      </Wrapper>
    </ThemeProvider>
  )
}
