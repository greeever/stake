import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
  chain
} from 'wagmi'

import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains( 
  [
    chain.polygonMumbai,
    // chain.mainnet,
    chain.polygon,
    // chain.optimism,
    // chain.arbitrum,
    
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
    //   ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
    //   : []),
  ],
  
  [
  alchemyProvider({ apiKey: 'ej5WjrTNfIunsEYL4M_89XRgLAZTZhIP' }),
  publicProvider(),
])

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})


function MyApp({ Component, pageProps }) {
  return (
    <>
       <Head>
        <title>Chase Fintoken</title>
      </Head>
      <WagmiConfig client={client}>

        
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </WagmiConfig>
    </>
  )
}

export default MyApp
