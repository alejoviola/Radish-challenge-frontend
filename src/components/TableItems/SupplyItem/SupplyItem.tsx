import Image from 'next/image'
import React from 'react'

type SupplyProps = {
  name: string
}

const SupplyItem = ({ name }: SupplyProps) => {
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
      <td>0.0000000</td>
      <td>{`< 0.01%`}</td>
      <td className={styles.ButtonsContainer}>
        <button className={styles.Button}>Supply</button>
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
