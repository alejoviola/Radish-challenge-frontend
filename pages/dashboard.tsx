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
} from '../src/components'

import Polygon from '../src/assets/networks/polygon.svg'
import { useContractReads } from 'wagmi'
import ModalProvider from '../src/context/Modal/ModalContext'

export default function Dashboard() {
  const { data } = useContractReads({
    contracts: [
      {
        address: '0x9A753f0F7886C9fbF63cF59D0D4423C5eFaCE95B',
        abi: [
          {
            inputs: [
              { internalType: 'string', name: 'name', type: 'string' },
              { internalType: 'string', name: 'symbol', type: 'string' },
              { internalType: 'uint8', name: 'decimals', type: 'uint8' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                indexed: true,
                internalType: 'address',
                name: 'spender',
                type: 'address',
              },
              {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
            ],
            name: 'Approval',
            type: 'event',
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
              },
              {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
              },
              {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
            ],
            name: 'Transfer',
            type: 'event',
          },
          {
            inputs: [],
            name: 'DOMAIN_SEPARATOR',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'EIP712_REVISION',
            outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'PERMIT_TYPEHASH',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [
              { internalType: 'address', name: 'owner', type: 'address' },
              { internalType: 'address', name: 'spender', type: 'address' },
            ],
            name: 'allowance',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [
              { internalType: 'address', name: 'spender', type: 'address' },
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'approve',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            inputs: [
              { internalType: 'address', name: 'account', type: 'address' },
            ],
            name: 'balanceOf',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'decimals',
            outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [
              { internalType: 'address', name: 'spender', type: 'address' },
              {
                internalType: 'uint256',
                name: 'subtractedValue',
                type: 'uint256',
              },
            ],
            name: 'decreaseAllowance',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            inputs: [
              { internalType: 'address', name: 'spender', type: 'address' },
              { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
            ],
            name: 'increaseAllowance',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            inputs: [
              { internalType: 'address', name: 'account', type: 'address' },
              { internalType: 'uint256', name: 'value', type: 'uint256' },
            ],
            name: 'mint',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            inputs: [
              { internalType: 'uint256', name: 'value', type: 'uint256' },
            ],
            name: 'mint',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            inputs: [],
            name: 'name',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [
              { internalType: 'address', name: 'owner', type: 'address' },
            ],
            name: 'nonces',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [
              { internalType: 'address', name: 'owner', type: 'address' },
              { internalType: 'address', name: 'spender', type: 'address' },
              { internalType: 'uint256', name: 'value', type: 'uint256' },
              { internalType: 'uint256', name: 'deadline', type: 'uint256' },
              { internalType: 'uint8', name: 'v', type: 'uint8' },
              { internalType: 'bytes32', name: 'r', type: 'bytes32' },
              { internalType: 'bytes32', name: 's', type: 'bytes32' },
            ],
            name: 'permit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            inputs: [],
            name: 'symbol',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'totalSupply',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'transfer',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            inputs: [
              { internalType: 'address', name: 'sender', type: 'address' },
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'transferFrom',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
          },
        ],
        functionName: 'balanceOf',
        args: ['0x687AF27B72e5c8eC10B8C5a91ab1BD8F0d941887'],
      },
    ],
  })

  console.log(data)

  return (
    <ModalProvider>
      <>
        <Modal title='Supply' />

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

            <CardContainer title='Assets to supply'>
              <SupplyTable />
            </CardContainer>
          </div>
        </main>
      </>
    </ModalProvider>
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
