import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains } from 'wagmi'
import { goerli } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

export const { chains, provider } = configureChains(
  [goerli],
  [
    alchemyProvider({ apiKey: 'Kqsfli5w2Mt6GqQgtIovPCxr27jDfp6O' }),
    publicProvider(),
  ],
)

export const { connectors } = getDefaultWallets({
  appName: 'Radish Frontend Challenge',
  chains,
})
