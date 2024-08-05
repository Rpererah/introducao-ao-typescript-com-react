import { format, formatDistanceToNow } from 'date-fns'
import { Avatar } from '../Avatar'
import { PostProps } from './props'
import {
  AvatarInfo,
  ButtonCustom,
  FooterContainer,
  InfoContainer,
  PostContainer,
  TextAreaCustom,
} from './styles'
import { ptBR } from 'date-fns/locale/pt-BR'

export function Post({ post }: PostProps) {
  const { author, content, publishedAt } = post
  const { name = '123', role = '123' } = author
  const publishedAtFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostContainer>
      <InfoContainer>
        <AvatarInfo>
          <Avatar />
          <div>
            <h1>{name}</h1>
            <p>{role}</p>
          </div>
        </AvatarInfo>
        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedAtRelativeToNow}
        </time>
      </InfoContainer>
      <main>
        <p>
          {content.map((line, index) => (
            <p key={index}>{line.content}</p>
          ))}
        </p>
      </main>
      <div></div>
      <FooterContainer>
        <p>Deixe seu feedback</p>
        <TextAreaCustom
          name=""
          id=""
          placeholder="Nossa, adorei amigo! Parabé|"
        ></TextAreaCustom>
        <ButtonCustom>Publicar</ButtonCustom>
      </FooterContainer>
    </PostContainer>
  )
}
