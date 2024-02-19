import { useParams } from 'react-router-dom'

import HeaderWithCart from '../../components/HeaderWithCart'
import MenuList from '../../components/MenuList'

import { useEffect, useState } from 'react'
import { RestauranteApiProps } from '../../utilities/types'

const Restaurants = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestauranteApiProps>()
  useEffect(() => {
    console.log(id)

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/' + id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setRestaurante(res)
      })
  }, [])
  if (!restaurante) return <h3>Carregando</h3>
  document.title = 'eFood | ' + restaurante.titulo

  return (
    <>
      <HeaderWithCart />
      <MenuList {...restaurante} />
    </>
  )
}

export default Restaurants
