import React, { useState, useContext } from 'react'
import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi'
import { BigNumber } from 'ethers'
import { Pool_Contract, Pool_ABI } from '../../../web3/data/data'
import { ModalContext } from '../../../context/Modal/ModalContext'
import { utils } from 'ethers'

const WiithdrawModal = () => {
  const { address: userAddress } = useAccount()
  const { token, aToken } = useContext(ModalContext)

  // Modal Logic
  const [amount, setAmount] = useState(0)

  // SUPPLY
  const { config: configSupply } = usePrepareContractWrite({
    address: Pool_Contract,
    abi: Pool_ABI,
    functionName: 'withdraw',
    args: [
      token!.address,
      BigNumber.from(utils.parseEther(amount.toString())),
      userAddress as `0x${string}`,
    ],
  })

  const { data: dataSupply, write: writeSupply } =
    useContractWrite(configSupply)

  return (
    <div>
      <form>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Amount
        </label>
        <input
          type='number'
          onChange={(e) => {
            setAmount(Number(e.target.value))
          }}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </form>

      <div className='flex flex-col justify-center mt-5'>
        <button
          onClick={() => {
            writeSupply?.()
          }}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Withdraw
        </button>
      </div>
    </div>
  )
}

export default WiithdrawModal
