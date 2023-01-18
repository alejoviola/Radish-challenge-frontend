import React, { useState, useEffect, createContext } from 'react'

type ModalProps = {
  isOpen: boolean
  OpenModal: () => void
  CloseModal: () => void
}

const initialState = {
  isOpen: false,
  OpenModal: () => {},
  CloseModal: () => {},
}

export const ModalContext = createContext<ModalProps>(initialState)

const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const OpenModal = () => {
    setIsOpen(true)
  }

  const CloseModal = () => {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ isOpen, OpenModal, CloseModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
