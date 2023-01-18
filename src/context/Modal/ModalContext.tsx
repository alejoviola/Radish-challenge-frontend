import React, { useState, useEffect, createContext } from 'react'
import { Contract } from '../../web3/types/ABI'

type Views = 'Supply' | undefined

type ModalProps = {
  isOpen: boolean
  title: string
  OpenModal: (title: string, view: Views, token: Contract) => void
  CloseModal: () => void
  view: Views
  token: Contract
}

export const ModalContext = createContext<ModalProps>({} as ModalProps)

const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('Modal')
  const [view, setView] = useState<Views>(undefined)
  const [token, setToken] = useState<Contract>()

  const OpenModal = (title: string, view: Views, token: Contract) => {
    setTitle(title)
    setView(view)
    setToken(token)
    setIsOpen(true)
  }

  const CloseModal = () => {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, title, OpenModal, CloseModal, view, token }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
