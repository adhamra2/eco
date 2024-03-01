import { ShoppingCart } from 'lucide-react'
import React from 'react'

function Modal({product}) {

  return (
    <div className="modal-box flex ">
    <img className='w-[300px] h-[300px] border' src={product.productImage[0].url} alt={product.productName} />
      <div className='ml-8 w-[300px]'>
        <h1 className='font-bold text-[18px]'>{product.productName}</h1>
        <h1 className='font-bold my-3'>${product.productPrice}</h1>
        <h1 className='mb-5'>{product.productDescription}</h1>
        <div className='w-auto h-[1px] bg-black opacity-[0.2]'></div>
        <div className='flex gap-2 mt-5 w-auto'>
        <div className='flex items-center'>
            <div className='w-8 h-8 rounded-l-md  border border-gray-300 flex items-center justify-center'>
              <h1 className='text-black'>-</h1>
            </div>
            <div className='w-16 h-8 flex items-center justify-center border border-gray-300'>
              1
            </div>
            <div className='w-8 h-8 rounded-r-md bg-red-600  border border-gray-300 flex items-center justify-center'>
              <h1 className='text-white'>+</h1>
            </div>
        </div>
        <a href="#" className='bg-red-500 px-10 h-8 flex items-center justify-center rounded-sm text-white'>Add</a>

        <a href="#"> {ShoppingCart} </a>
      </div>
      </div>

      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
    </div>
  )
}

export default Modal