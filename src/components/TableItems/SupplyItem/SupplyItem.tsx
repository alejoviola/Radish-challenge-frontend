import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'

import { Contract } from '../../../web3/types/ABI'
import { useAccount, useBalance, useContractRead } from 'wagmi'
import { useModal } from '../../../hooks/useModal'
import { ModalContext } from '../../../context/Modal/ModalContext'

const SupplyItem = ({ name, address, ABI, isMatic }: Contract) => {
  const [walletBalance, setBalance] = useState('0.00')

  const { address: wallet } = useAccount()
  const { data: balance } = useBalance({
    address: wallet,
  })
  const { data } = useContractRead({
    address,
    abi: ABI,
    functionName: 'balanceOf',
    args: [wallet],
  })

  useEffect(() => {
    isMatic
      ? balance && setBalance(Number(balance.formatted).toFixed(4))
      : data && setBalance(Number(data._hex / Math.pow(10, 18)).toFixed(4))
  }, [isMatic, balance, data])

  const { OpenModal } = useContext(ModalContext)

  return (
    <tr className={styles.Items}>
      <td className={styles.TokenItem}>
        <Image
          src={require('../../../assets/tokens/usdt.svg')}
          alt={'Network Image'}
          className={styles.TokenImage}
        />
        <p>{name}</p>
      </td>
      <td>{walletBalance}</td>
      <td>{`< 0.01%`}</td>
      <td className={styles.ButtonsContainer}>
        <button className={styles.Button} onClick={OpenModal}>
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

export default SupplyItem
