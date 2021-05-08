import React from "react"

const ProductCard = ({ product }) => {
  return (
    <div className="w-1/2 lg:w-1/4 p-4">
      <div className="cursor-pointer">
        <a className="block relative h-48 rounded">
          <img
            alt="ecommerce"
            className="object-contain object-center w-full h-full block"
            src={product.img}
          />
        </a>
        <div className="m-4 flex flex-row flex-nowrap justify-between content-center">
          <div>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
              {product.type}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {product.name}
            </h2>
            <p className="mt-1">${product.price.toFixed(2)}</p>
          </div>
          <button className='text-xs bg-purple-200 p-2 h-10 hover:bg-purple-100'>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
