// React
import React, { useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const OpenModal = () => {
    setIsOpen(true)
  }

  const CloseModal = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    OpenModal,
    CloseModal,
  }
}
