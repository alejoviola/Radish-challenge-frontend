import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

export const { chains, provider } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: 'IohimwgW6vird0qU2tBaRmOmUOVT2hyc' }),
    publicProvider(),
  ],
)

export const { connectors } = getDefaultWallets({
  appName: 'Radish Frontend Challenge',
  chains,
})
