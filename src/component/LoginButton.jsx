// import { useAuth } from './AuthProvider'

// export const LoginButton = () => {
//     const web3AuthModalPack = useAuth()

//     const handleSignIn = async () => {
//         try {
//             // 调用 signIn() 方法开始身份验证过程
//             const authKitSignData = await web3AuthModalPack.signIn();
//             // 处理 authKitSignData
//         } catch (error) {
//             // 处理错误
//             console.error(error);
//         }
//     }

//     return (
//         <button
//             className="App-link"
//             onClick={handleSignIn}
//         >
//             点击登录
//   </button>
//     )
// }

import React from 'react';
import './LoginButton.css'; // 引入CSS文件

const LoginButton = () => (
  <button className="LoginButton">Connet Wallet</button>
);

export default LoginButton;

