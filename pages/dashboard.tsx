// React
import React from 'react'

// Next
import Image from 'next/image'

// Components
import {
  NetworkCard,
  CardContainer,
  SupplyTable,
  Modal,
  SupplyItem,
} from '../src/components'

import Goerli from '../src/assets/networks/ethereum.svg'
import ModalProvider from '../src/context/Modal/ModalContext'

import { tokens } from '../src/web3/data/data'
import { ABI, Contract } from '../src/web3/types/types'
import YourSupplyItem from '../src/components/TableItems/YourSupplyItem/YourSupplyItem'
import { useAccount } from 'wagmi'

export default function Dashboard() {
  const { isConnected } = useAccount()

  return isConnected ? (
    <ModalProvider>
      <>
        <Modal />

        <main className={styles.Container}>
          <div className={styles.Dashboard}>
            <div className={styles.CardContainer}>
              <NetworkCard name='Goerli Testnet' image={Goerli} />
            </div>

            <CardContainer title='Your Supplies'>
              <SupplyTable>
                {tokens.map(({ token, aToken }, i) => {
                  return (
                    <YourSupplyItem
                      key={i}
                      token={token as Contract}
                      aToken={aToken}
                    />
                  )
                })}
              </SupplyTable>
            </CardContainer>

            <CardContainer title='Assets to supply'>
              <SupplyTable>
                {tokens.map(({ token }, i) => {
                  return (
                    <SupplyItem
                      key={i}
                      name={token.name}
                      address={token.address as `0x${string}`}
                      ABI={token.ABI as ABI[]}
                      isMatic={token.isMatic}
                    />
                  )
                })}
              </SupplyTable>
            </CardContainer>
          </div>
        </main>
      </>
    </ModalProvider>
  ) : (
    <div className={styles.Container}>
      <h2 className={styles.Title}>Please, connect your wallet</h2>
    </div>
  )
}

const styles = {
  Container: `
  relative
  flex
  lg:justify-center
  `,
  Dashboard: `
  flex
  w-full
  flex-col
  p-5
  py-6
  lg:max-w-screen-xl
  `,
  CardContainer: `
  flex
  flex-row
  `,
  Card: `
  flex
  p-6
  items-center
  
  sm:text-1xl
  md:text-2xl
  lg:text-3xl
  font-bold 
  text-gray-900 
  tracking-tight

  border 
  border-gray-200 
  rounded-lg 
  shadow-md

  dark:text-white
  dark:bg-gray-800 
  dark:border-gray-700
  `,
  NetworkImage: `
  mr-5
  sm:w-10
  md:w-11
  lg:w-12
  `,
  CardTitle: `
  text-base
  text-gray-400 
  `,
  DetailsContainer: `
  py-6
  `,
  Detail: `
  mr-10
  `,
  Pools: `
  flex
  flex-col
  p-6
  
  text-lg
  font-bold 
  text-gray-900 
  tracking-tight

  border 
  border-gray-200 
  rounded-lg 
  shadow-md

  dark:text-white
  dark:bg-gray-800 
  dark:border-gray-700
  `,
  Title: `
  text-2xl
  `,
  Balance: `
  py-4
  font-normal
  text-gray-400 
  `,
  Number: `
  text-gray-100 
  font-bold
  `,

  Table: `
  my-5
  text-left
  `,
  Label: `
  text-sm
  text-gray-400 
  `,
  Items: `
  box-content
  font-normal
  `,
  TokenImage: `
  mr-5
  sm:w-8
  `,
  TokenItem: `
  flex
  items-center
  py-2
  `,
  ButtonsContainer: `
  w-64
  text-right
  `,
  Button: `
  bg-blue-500 
  hover:bg-blue-700 
  text-white 
  font-bold
  ml-3
  py-2 
  px-4 
  rounded
  `,
}
