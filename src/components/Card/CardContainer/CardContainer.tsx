// React
import React from 'react'

type CardContainerProps = {
  title: string
  children: React.ReactNode
}

const CardContainer = ({ title, children }: CardContainerProps) => {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.Card}>
        <h2 className={styles.Title}>{title}</h2>

        {children}

        {/* <table className={styles.Table}>
          <thead>
            <tr className={styles.Label}>
              <th>Asset</th>
              <th>Wallet Balance</th>
              <th>APY</th>
            </tr>
          </thead>

          <tbody>
            <tr className={styles.Items}>
              <td className={styles.TokenItem}>
                <Image
                  src={require('../../../assets/tokens/usdt.svg')}
                  alt={'Network Image'}
                  className={styles.TokenImage}
                />
                <p>USDT</p>
              </td>
              <td>0.1000000</td>
              <td>{`< 0.01%`}</td>
              <td className={styles.ButtonsContainer}>
                <button className={styles.Button}>Supply</button>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  )
}

const styles = {
  CardContainer: `
    py-6
    `,
  Card: `
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
    mb-5
    text-2xl
    `,
}

export default CardContainer
