import styled from 'styled-components'
export const AsideContainer = styled.aside`
  background-color: ${(props) => props.theme['gray-card']};
  border-radius: 8px;
  overflow: hidden;
`
export const Cover = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(0px - 1.5rem - 6px);

  strong {
    margin-top: 1rem;
    color: ${(props) => props.theme['gray-text-titles']};
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-text-apoio']};
    line-height: 1.6;
  }
`
export const FooterContainer = styled.footer`
  border-top: 1px solid ${(props) => props.theme['gray-divider']};
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;
`

export const ButtonSideBar = styled.button`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme['green-light']};
  color: ${(props) => props.theme['green-light']};
  border-radius: 8px;
  height: 50px;
  padding: 0 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition:
    color 0.2s,
    background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['green-light']};
    color: ${(props) => props.theme.white};
  }
`
