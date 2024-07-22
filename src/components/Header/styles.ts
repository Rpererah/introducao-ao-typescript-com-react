import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['gray-card']};
  height: 6.25rem;
  gap: 0.5rem;
`
export const TextCustom = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`
export const Image = styled.img`
  height: 3.75rem;
  width: 3.75rem;
`
