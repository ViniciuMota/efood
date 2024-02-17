import { StyledMenuItemButton } from '../Button/styles'

import StyledModal, { StyledModalContainer } from './styles'
import btn_close from '../../assets/images/btn_close.png'

import { MenuItemModalProps } from '../../utilities/types'
import { formataPreco } from '../../utilities/helper'

const ModalItem = (props: MenuItemModalProps) => {
  if (!props.showModal) return <></>

  return (
    <StyledModal onClick={props.toggleModal}>
      <StyledModalContainer className="container">
        <img
          id="btn_close"
          src={btn_close}
          alt="X"
          onClick={props.toggleModal}
        />
        <img id="image_item" src={props.foto} alt="imagem" />
        <div id="details">
          <h3>{props.nome}</h3>
          <p>
            {props.descricao}
            <br />
            <br />
            Serve: de {props.porcao}
          </p>
          <StyledMenuItemButton>
            Adicionar ao carrinho - {formataPreco(props.preco)}
          </StyledMenuItemButton>
        </div>
      </StyledModalContainer>
    </StyledModal>
  )
}

export default ModalItem
