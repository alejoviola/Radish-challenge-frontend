import React, { useState, useEffect, createContext } from 'react'
import { Contract, AContract } from '../../web3/types/types'

type Views = 'Supply' | 'Withdraw' | undefined

type ModalProps = {
  isOpen: boolean
  title: string
  OpenModal: (title: string, view: Views, token: Contract) => void
  CloseModal: () => void
  view: Views
  token?: Contract
  aToken?: AContract
}

export const ModalContext = createContext<ModalProps>({} as ModalProps)

const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('Modal')
  const [view, setView] = useState<Views>(undefined)
  const [token, setToken] = useState<Contract>()
  const [aToken, setAtoken] = useState<AContract>()

  const OpenModal = (
    title: string,
    view: Views,
    token: Contract,
    aToken?: AContract,
  ) => {
    setTitle(title)
    setView(view)
    setToken(token)
    aToken && setAtoken(aToken)
    setIsOpen(true)
  }

  const CloseModal = () => {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, title, OpenModal, CloseModal, view, token, aToken }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
