import PrimaryButton from './PrimaryButton'

export default props => {
  const tax = props.taxRate * props.subTotal
  const total = props.subTotal + tax + props.shipping

  return (
    <div>

      <div
        className="w-64 flex flex-col justify-between items-center p-4 m-2 mb-4 border border-gray-200 bg-white rounded-lg shadow-md"
      >
        <div className='flex justify-between items-center w-full'>
          <span className="text-2xl font-bold text-indigo-500">
            Subtotal
          </span>
          <span>${props.subTotal}</span>
        </div>
        <div className='flex justify-between items-center w-full'>
          <span className="text-2xl font-bold text-indigo-500 mr-1">
              Tax @ {props.taxRate}%
          </span>
          <span>${tax}</span>
        </div>
        <div className='flex justify-between items-center w-full'>
          <span className="text-2xl font-bold text-indigo-500">
          Shipping
          </span>
          <span>${props.shipping}</span>
        </div>

        <hr className="border-gray-300 m-2 w-full"/>

        <div className='flex justify-between items-center w-full'>
          <span className="text-2xl font-bold text-indigo-500">
            Total
          </span>
          <span>${total}</span>
        </div>

        <PrimaryButton
          onClick={() => {}}
          buttonText={'Checkout'}
        />
      </div>

      <div
        className="w-64 flex flex-col justify-between items-center p-4  m-2 border border-gray-200 bg-white rounded-lg shadow-md"
      >
        <div className="text-3xl font-bold text-indigo-500">
          Need Help?
        </div>
        <div className='text-center'>Reach out any time at 123-456-7890</div>
      </div>

    </div>

  )
}
