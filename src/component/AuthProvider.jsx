// import { createContext, useContext } from 'react'
// import { Web3AuthModalPack } from '@safe-global/auth-kit'
// import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
// import { useEffect, useState } from 'react';

// // 创建 AuthContext
// export const AuthContext = createContext(null);

// // https://web3auth.io/docs/sdk/pnp/web/modal/initialize#arguments
// const options = {
//   clientId: 'BNY72H8oE9KQq39lLnQBoS0o9FhkrxRpZzkBmJj-SpyqPASW_aIQriVEUfH0JqxpgwWDdshXWyqJjDBYJsNhcpM', // https://dashboard.web3auth.io/
//   web3AuthNetwork: 'testnet',
//   chainConfig: {
//     chainNamespace: 'eip155',
//     chainId: '0x5',
//     // https://chainlist.org/
//     rpcTarget: 'https://rpc.ankr.com/eth_goerli'
//   },
//   uiConfig: {
//     theme: 'dark',
//     loginMethodsOrder: ['google', 'facebook']
//   }
// }

// // https://web3auth.io/docs/sdk/pnp/web/modal/initialize#configuring-adapters
// const modalConfig = {
//   metamask: {
//     label: 'metamask',
//     showOnDesktop: true,
//     showOnMobile: false
//   }
// }

// // https://web3auth.io/docs/sdk/pnp/web/modal/whitelabel#whitelabeling-while-modal-initialization
// const openloginAdapter = new OpenloginAdapter({
//   loginSettings: {
//     mfaLevel: 'mandatory'
//   },
//   adapterSettings: {
//     uxMode: 'popup',
//     whiteLabel: {
//       name: 'Safe'
//     }
//   }
// })

// const web3AuthConfig = {
//   txServiceUrl: 'https://safe-transaction-goerli.safe.global'
// }

// export const AuthProvider = ({ children }) => {

//   const [web3AuthModalPack, setWeb3AuthModalPack] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const pack = new Web3AuthModalPack(web3AuthConfig)
//       const auth = await pack.init({ options, adapters: [openloginAdapter], modalConfig })
//       setWeb3AuthModalPack(auth)
//     })()
//  }, [])

//   return (
//   <AuthContext.Provider value={web3AuthModalPack}>
//     {children}
//   </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext)