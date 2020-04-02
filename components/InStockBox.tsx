import Link from 'next/link'
import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import ADD_TO_CART_MUTATION from '../constants/graphql/cart.mutation'

import Toast from '../components/Toast'
import PrimaryButton from '../components/PrimaryButton'

export default props => {
  const [addToCart, { data }] = useMutation(ADD_TO_CART_MUTATION)

  const [isVisible, setIsVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('INFORMATIONAL')

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  const onCartClick = () => {
    addToCart({ variables: { userId: 1, boardId: props.id, quantity: 1 } })
      .then(function (response) {
        setToastMessage('Success! Item was added to the cart')
        setIsVisible(true)
        setToastType('SUCCESS')
        console.log(response)
      })
      .catch(function (err) {
        setToastMessage('error ☹️, item was not able to be added to the cart')
        setIsVisible(true)
        setToastType('ERROR')
        console.log(err)
      })
      .then(function () {
        delay(1000).then(function () {
          setToastMessage('')
          setIsVisible(false)
          setToastType('INFORMATIONAL')
        })
      })
  }

  return (
    <Link
      href="/boards/[id]"
      as={
        '/boards/' +
            props.id
      }
    >
      <a className="w-64 flex flex-col items-center p-4 m-4 border border-gray-200 hover:border-gray-400 bg-white rounded-lg shadow-lg hover:shadow-xl">
        <h3 className="text-3xl font-bold text-indigo-500">{props.wood.name}</h3>
        <span>
          {props.width_in_cm}cm x {props.length_in_cm}cm x {props.thickness_in_cm}cm
        </span>
        <span className="mb-4">{props.stain.name}</span>
        <img src={props.picture_url}></img>
        <PrimaryButton onClick={e => onCartClick() } buttonText={'Add to Cart'} />
        <Toast isVisible={isVisible} toastMessage={toastMessage} toastType={toastType}/>
      </a>
    </Link>
  )
}
