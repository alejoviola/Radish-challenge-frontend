import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'

import { Contract, AContract } from '../../../web3/types/types'
import { useAccount, useBalance, useContractRead } from 'wagmi'
import { ModalContext } from '../../../context/Modal/ModalContext'

type Props = {
  token: Contract
  aToken: AContract
}

const YourSupplyItem = ({ token, aToken }: Props) => {
  const [walletBalance, setBalance] = useState('0.00')

  const { address: wallet } = useAccount()
  const { data: balance } = useBalance({
    address: wallet,
  })
  const { data } = useContractRead({
    address: aToken.address as `0x${string}`,
    abi: aToken.ABI,
    functionName: 'balanceOf',
    args: [wallet as `0x${string}`],
  })

  useEffect(() => {
    aToken.isMatic
      ? balance && setBalance(Number(balance.formatted).toFixed(4))
      : data && setBalance(Number(data._hex / Math.pow(10, 18)).toFixed(4))
  }, [aToken.isMatic, balance, data])

  const { OpenModal } = useContext(ModalContext)

  return (
    <tr className={styles.Items}>
      <td className={styles.TokenItem}>
        <Image
          src={require(`../../../assets/tokens/${token.name.toLowerCase()}.svg`)}
          alt={'Network Image'}
          className={styles.TokenImage}
        />
        <p>{aToken.name}</p>
      </td>
      <td>{walletBalance}</td>
      <td>{`< 0.01%`}</td>
      <td className={styles.ButtonsContainer}>
        <button
          className={styles.Button}
          onClick={() =>
            OpenModal(`Widthdraw ${token.name}`, 'Withdraw', token, aToken)
          }
        >
          Withdraw
        </button>
        <button
          className={styles.Button}
          onClick={() => OpenModal(`Supply ${token.name}`, 'Supply', token)}
        >
          Supply
        </button>
      </td>
    </tr>
  )
}

const styles = {
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

export default YourSupplyItem
