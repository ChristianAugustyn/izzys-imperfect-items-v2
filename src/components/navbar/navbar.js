import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import logo from "../../images/logo-b.png"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="container flex md:hidden flex-row-reverse">
        {/* menu buttons */}
        {!isOpen ? (
          <button className="z-50" onClick={() => setIsOpen(!isOpen)}>
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
          <button className="z-50" onClick={() => setIsOpen(!isOpen)}>
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
            <li className="pr-4">Products</li>
            <li className="pr-4">About</li>
            <li className="pr-4">Contact</li>
            <li className="pr-4">Questions</li>
            <li className="pr-4">Cart</li>
          </ul>
        </div>
      </nav>
      {/* side nav on pop up */}
        <Transition
			show={isOpen}
			enter="transition-opacity duration-75"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
          <div className="z-20 absolute inset-0">
            <div className="float-right w-64 h-screen bg-purple-300">swag</div>
          </div>
        </Transition>
    </div>
  )
}

export default NavBar
