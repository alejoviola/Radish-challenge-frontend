// Wagmi
import { createClient } from 'wagmi'
// Rainbow
import { connectors, provider } from './rainbow-config'

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})
