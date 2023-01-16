import React from 'react'
//
import Link from 'next/link'
//
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Header = () => {
  return (
    <div
      className='relative 
    bg-white'
    >
      <div
        className='mx-auto 
      max-w-7xl 
      px-6'
      >
        <div
          className='flex 
        items-center 
        justify-between 
        border-b-2
        border-gray-100
        py-6
        md:justify-start
        md:space-x-10'
        >
          {/* BRAND */}
          <div
            className='flex 
          justify-start 
          lg:w-0 
          lg:flex-1'
          >
            <span
              className='font-semibold
              text-lg'
            >
              Radish - AAVE Protocol
            </span>
          </div>

          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                <Link
                  href='/'
                  className='hover:bg-gray-300 text-black px-3 py-2 rounded-md text-sm font-medium'
                >
                  Home
                </Link>
                <Link
                  href='/dashboard'
                  className='hover:bg-gray-300 text-black px-3 py-2 rounded-md text-sm font-medium'
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
          <ConnectButton
            accountStatus={'address'}
            chainStatus={'name'}
            showBalance={{ smallScreen: false, largeScreen: true }}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
