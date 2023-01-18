import React from 'react'
import { useModal } from '../../hooks/useModal'
import { IoCloseOutline } from 'react-icons/io5'

type ModalProps = {
  title: string
}

const Modal = ({ title }: ModalProps) => {
  const { isOpen, CloseModal } = useModal()

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
    w-96
    flex
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
  `,
  Title: `
    text-2xl
  `,
  Close: `
    h-8
  `,
}

export default Modal
