// React
import React from 'react'

// Next
import Image from 'next/image'

// Components
import { NetworkCard, CardContainer } from '../src/components'

import Polygon from '../src/assets/networks/polygon.svg'

export default function Dashboard() {
  return (
    <main className={styles.Container}>
      <div className={styles.Dashboard}>
        <div className={styles.CardContainer}>
          <NetworkCard name='Polygon Mumbai Testnet' image={Polygon} />
        </div>

        <div className={styles.DetailsContainer}>
          <div className={styles.Card}>
            <div className={styles.Detail}>
              <h4 className={styles.CardTitle}>Net Worth</h4>
              <p>
                <span>$</span>0.94
              </p>
            </div>
            <div className={styles.Detail}>
              <h4 className={styles.CardTitle}>Net APY</h4>
              <p>
                -0.05<span>%</span>
              </p>
            </div>
            <div className={styles.Detail}>
              <h4 className={styles.CardTitle}>Health factor</h4>
              <p>1.08</p>
            </div>
          </div>
        </div>

        <CardContainer title='Assets to supply'></CardContainer>
      </div>
    </main>
  )
}

const styles = {
  Container: `
  flex
  p-5
  lg:justify-center
  `,
  Dashboard: `
  flex
  w-full
  flex-col
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
