import React, { useContext, useRef } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { ModalContext } from '../../context/Modal/ModalContext'
import {
  useContractWrite,
  usePrepareContractWrite,
  useContractReads,
} from 'wagmi'
import { BigNumber } from 'ethers'
import SupplyModal from '../ModalViews/SupplyModal.tsx/SupplyModal'

type ModalProps = {
  title: string
}

const Modal = () => {
  const { isOpen, title, CloseModal, view } = useContext(ModalContext)

  return isOpen ? (
    <div
      style={{
        backgroundColor: 'rgba(71,85,105, 0.75)',
      }}
      className={styles.Container}
    >
      <div className={styles.Modal}>
        <div className={styles.Header}>
          <h2 className={styles.Title}>{title}</h2>
          <button className={styles.Close} onClick={CloseModal}>
            <IoCloseOutline color='white' size={30} />
          </button>
        </div>

        {view === 'Supply' && <SupplyModal />}
      </div>
    </div>
  ) : null
}

const styles = {
  Container: `
    absolute
    flex
    justify-center
    items-center
    w-full
    h-full
    z-50
    bg-slate-600
  `,
  Modal: `
    flex
    flex-col
    w-1/2
    p-6
    
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
  Header: `
    flex
    flex-row
    items-center
    justify-between
    w-full
    mb-5
  `,
  Title: `
    text-2xl
  `,
  Close: `
    h-8
  `,
}

export default Modal
