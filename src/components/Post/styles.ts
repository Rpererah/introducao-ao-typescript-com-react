import styled from 'styled-components'

export const PostContainer = styled.article`
  height: 621px;
  width: 832px;
  background-color: ${(props) => props.theme['gray-card']};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 8px;
`

export const InfoContainer = styled.header`
  display: flex;
  justify-content: space-between;

  time {
    color: ${(props) => props.theme['gray-text-apoio']};
    font-size: 0.875rem;
  }
`

export const AvatarInfo = styled.div`
  display: flex;

  div {
    margin-left: 1rem;

    h1 {
      font-weight: bold;
      color: ${(props) => props.theme.white};
    }
    p {
      color: ${(props) => props.theme['gray-text-apoio']};
      font-size: 0.875rem;
    }
  }
`

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${(props) => props.theme['gray-divider']};

  p {
    line-height: 1.6;
    color: ${(props) => props.theme.white};
    font-weight: bold;
  }
`
export const TextAreaCustom = styled.textarea`
  width: 100%;
  background-color: ${(props) => props.theme['gray-background']};
  border: none;
  margin-top: 1rem;
  resize: none;
  padding: 1rem;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-text-titles']};
  line-height: 1.4;
  height: 6rem;
`

export const ButtonCustom = styled.button`
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.green};
  font-weight: bold;
  border: 0;
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: ${(props) => props.theme['green-light']};
  }
`
