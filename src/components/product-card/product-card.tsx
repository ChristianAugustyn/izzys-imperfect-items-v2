import React, { FC } from "react"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import { Product } from '../../models/product'

interface Props {
  product: Product
}

const ProductCard: FC<Props> = ({ product }) => {

  const image: IGatsbyImageData = getImage(product.imgNode)

  return (
    <div className="w-1/2 lg:w-1/4 p-4"  onClick={() => navigate(`/products/${product.collection}/${product.id}`)}>
      <div className="cursor-pointer">
          <GatsbyImage image={image} alt={product.name} className='w-full h-full'/>
        <div className="m-4 flex flex-row flex-nowrap justify-between content-center">
          <div>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
              {product.collection}
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
