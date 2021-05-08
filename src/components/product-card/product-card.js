import React from "react"

const ProductCard = ({ product }) => {
  return (
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a class="block relative h-48 rounded">
        <img
          alt="ecommerce"
          class="object-contain object-center w-full h-full block"
          src={product.img}
        />
      </a>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
          {product.type}
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">
          {product.name}
        </h2>
        <p class="mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard
