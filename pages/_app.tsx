import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'

import type { AppProps } from 'next/app'

// Wagmi and Rainbow
import { chains } from '../src/web3/rainbow-config'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { wagmiClient } from '../src/web3/wagmin-config'
import { Header } from '../src/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Header />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
