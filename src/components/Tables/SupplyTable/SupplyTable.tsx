import React from 'react'
import SupplyItem from '../../TableItems/SupplyItem/SupplyItem'

import tokens from '../../../web3/data/Pools.json'
import { ABI } from '../../../web3/types/ABI'

const SupplyTable = () => {
  return (
    <table className={styles.Table}>
      <thead>
        <tr className={styles.Label}>
          <th>Asset</th>
          <th>Wallet Balance</th>
          <th>APY</th>
        </tr>
      </thead>

      <tbody>
        {tokens.map((value, i) => {
          return (
            <SupplyItem
              key={i}
              name={value.name}
              address={value.address as `0x${string}`}
              ABI={value.ABI as ABI[]}
              isMatic={value.isMatic}
            />
          )
        })}
      </tbody>
    </table>
  )
}

const styles = {
  Table: `
    my-5
    text-left
    `,
  Label: `
    text-sm
    text-gray-400 
    `,
}

export default SupplyTable
