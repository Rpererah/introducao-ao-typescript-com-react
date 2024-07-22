import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { ContainerPost, Wrapper } from './styles'
import { Post } from './components/Post'
import { PostInterface } from './interface/PostInterface'
import { Button } from './components/Button'

const posts: PostInterface[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/KaiD3v.png',
      name: 'Kaique Melo',
      role: 'Future Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2024-08-12 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rpererah.png',
      name: 'Rafael Araujo',
      role: 'Frontista',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2024-08-12 15:00:00'),
  },
]

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Sidebar />

        <ContainerPost>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
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
