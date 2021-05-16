import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"

const ProductCard = ({ product }) => {

  const image = getImage(product.imgNode)

  return (
    <div className="w-1/2 lg:w-1/4 p-4"  onClick={() => navigate(`/products/${product.type}/${product.id}`)}>
      <div className="cursor-pointer">
          <GatsbyImage image={image} constrained alt={product.name} className='w-full h-full'/>
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

        </div>
      </div>
    </div>
  )
}

export default ProductCard
