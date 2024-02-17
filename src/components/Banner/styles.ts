import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const Logo = styled.img`
  position: absolute;
  top: 32px;
  left: calc(50% - 28px);
`
export const Text = styled.h2`
  position: absolute;
  top: 260px;
  width: 539px;
  height: 236px;
  left: calc(50% - 270px);
  font-weight: bold;
  font-size: 36px;
  color: ${cores.salmao};
`
