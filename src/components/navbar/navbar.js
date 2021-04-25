import React, { useState, Fragment } from "react"
import { Transition, Menu, Popover } from "@headlessui/react"
import Badge from "../badge/badge"
import logo from "../../images/logo-b.png"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="container flex md:hidden flex-row justify-between">
        <div>
          <button className='inline-flex'>
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
            <Badge value={1} />
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
          <ul className="hidden md:flex flex-row justify-center">
            <li className="pr-4">Home</li>
            {/* Drop down menu for the products */}
            <li className="pr-4">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button>Products</Popover.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 w-52">
                        <div className="grid grid-cols-1 border-solid rounded shadow-sm p-3 pt-0 mt-3 bg-purple-50">
                          <a href="#" className="my-3">
                            Scrunchies
                          </a>
                          <a href="#" className="my-3">
                            Specialty Scrunchies
                          </a>
                          <a href="#" className="my-3">
                            Cutlery Pouches
                          </a>
                          <a href="#" className="my-3">
                            Napkins
                          </a>
                          <a href="#" className="my-3">
                            Face Masks
                          </a>
                          <a href="#" className="my-3">
                            Bowl Cozies
                          </a>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </li>
            <li className="pr-4">About</li>
            <li className="pr-4">Contact</li>
            <li className="pr-4">Questions</li>
            <li className="pr-4 flex flex-row">
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
            </li>
          </ul>
        </div>
      </nav>
      {/* side nav on pop up */}
      <Transition
        show={isOpen}
        enter="ease-in-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="md:invisible z-20 absolute inset-0 flex flex-row-reverse item-start">
          {/* Side nav, Navigation */}
          <div className="z-40 w-64 h-full bg-white">
            <ul className="my-4">
              <li className="pr-4">Home</li>
              <li className="pr-4">Products</li>
              <li className="pr-4">About</li>
              <li className="pr-4">Contact</li>
              <li className="pr-4">Questions</li>
            </ul>
          </div>
          <button className="z-40 h-3" onClick={() => setIsOpen(false)}>
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
      </Transition>
    </div>
  )
}

export default NavBar
