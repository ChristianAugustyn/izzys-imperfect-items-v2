import React, { useState, Fragment, useEffect, FC } from "react"
import { Transition, Popover } from "@headlessui/react"
import { graphql, navigate, useStaticQuery } from "gatsby"
import logo from "../../images/logo-b.png"
import _ from 'lodash'

const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const cartLength = 5

  const {
    allProduct: { distinct: collections },
  } = useStaticQuery(graphql`
    query {
      allProduct {
        distinct(field: collection)
      }
    }
  `)

  useEffect(() => {
    if (!isOpen) {
      setIsHover(false)
    }
  }, [isOpen])

  return (
    <div className=" z-30">
      <div className="container px-7 flex md:hidden flex-row justify-between">
        {/* cart button */}
        <div>
          <button className="inline-flex">
            <span class="relative inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span
                class={`${
                  cartLength > 0 ? "absolute" : "hidden"
                } top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full`}
              >
                {cartLength}
              </span>
            </span>
          </button>
        </div>
        {/* menu buttons */}
        {!isOpen ? (
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      {/* logo */}
      <div className="flex flex-col items-center">
        <img src={logo} className="w-52 h-auto " />
      </div>
      {/* Navigation elements go here */}
      <nav>
        <div className="container mx-auto">
          <ul className="hidden md:flex flex-row justify-center text-center mb-4">
            <li
              className="px-4 purple-decoration cursor-pointer"
              onClick={() => navigate(`/`)}
            >
              Home
            </li>
            {/* Drop down menu for the products */}
            <li className="px-4 purple-decoration">
              <Popover
                className="relative"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => setIsHover(!isHover)}
              >
                <Popover.Button>Products</Popover.Button>

                <Transition
                  show={isHover}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel static className="absolute z-10 w-52">
                    <div className="grid grid-cols-1 border-solid rounded shadow-sm p-3 pt-0 mt-3 bg-purple-50 text-left">
                      {collections.map(c => (
                        <a
                          className="my-3 cursor-pointer"
                          onClick={() => navigate(`/products/${c}`)}
                        >
                          {_.lowerCase(c)}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </li>
            <li className="px-4 purple-decoration">About</li>
            <li className="px-4 purple-decoration">Contact</li>
            <li className="px-4 purple-decoration">Questions</li>
            <li className="px-4 purple-decoration flex flex-row">
              <span class="relative inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span
                  class={`${
                    cartLength > 0 ? "absolute" : "hidden"
                  } top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full`}
                >
                  {cartLength}
                </span>
              </span>
            </li>
          </ul>
        </div>
      </nav>
      {/* side nav on pop up */}
      <div className={`${isOpen ? `block` : `hidden`}`}>
        <div className="md:invisible z-20 absolute inset-0 flex flex-row-reverse item-start">
          {/* Side nav, Navigation */}
          <div
            className={`z-40 w-64 h-full bg-white ${
              isHover ? `hidden` : `block`
            }`}
          >
            <ul className="my-4">
              <li className="pr-4 cursor-pointer" onClick={() => navigate("/")}>
                Home
              </li>
              <li
                className="pr-4 cursor-pointer"
                onClick={() => setIsHover(true)}
              >
                Products
              </li>
              <li className="pr-4 cursor-pointer">About</li>
              <li className="pr-4 cursor-pointer">Contact</li>
              <li className="pr-4 cursor-pointer">Questions</li>
            </ul>
          </div>
          {/* side nav for the listed set of product categories */}
          <div
            className={`z-50 w-64 h-full bg-white ${
              isHover ? `block` : `hidden`
            }`}
          >
            <ul className="my-4">
              {
                collections.map(c => (
                  <li
                    className="pr-4 cursor-pointer"
                    onClick={() => navigate(`/products/${c}`)}
                  >
                    {_.lowerCase(c)}
                  </li>
                ))
              }
            </ul>
          </div>
          <button className="z-40 h-6" onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default NavBar
