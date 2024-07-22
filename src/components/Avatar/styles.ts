import styled from 'styled-components'

export const AvatarContainer = styled.img`
  width: 3rem;
  height: 3rem;
  border: 4px solid ${(props) => props.theme['gray-card']};
  outline: 2px solid ${(props) => props.theme['green-light']};
  border-radius: 8px;
`
