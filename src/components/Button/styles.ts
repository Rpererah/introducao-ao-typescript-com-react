import styled from 'styled-components'
import { COLOR, CustomButtonProps, Size } from './props'

export const CustomButtom = styled.button<CustomButtonProps>`
  height: 50px;
  width: 150px;
  border: none;
  background-color: ${(props) =>
    props.variant ? props.theme[COLOR[props.variant]] : COLOR.blue};
  color: white;
  font-size: ${(props) => (props.size ? Size[props.size] : Size.medium)};
`
