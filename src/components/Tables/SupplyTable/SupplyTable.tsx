import Image from 'next/image'
import React from 'react'
import SupplyItem from '../../TableItems/SupplyItem/SupplyItem'

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
        <SupplyItem />
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
