// React
import React from 'react'
// Next
import Image from 'next/image'

type Props = {
  name: string
  image: any
}

const NetworkCard = ({ name, image }: Props) => {
  return (
    <div className={styles.Card}>
      <Image
        src={image}
        alt={'Network Image'}
        className={styles.NetworkImage}
      />
      <div>
        <h4 className={styles.CardTitle}>Network</h4>
        <h5>{name}</h5>
      </div>
    </div>
  )
}

const styles = {
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
}

export default NetworkCard
