import React from 'react'
import { useModal } from '../../hooks/useModal'

const Modal = () => {
  const { isOpen } = useModal()

  return isOpen ? (
    <div
      style={{
        backgroundColor: 'rgba(71,85,105, 0.75)',
      }}
      className={styles.Container}
    >
      <div className={styles.Modal}></div>
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
    h-96
    bg-red-200
  `,
}

export default Modal
