import './App.css';
import GoogleMapComponent from '././pages/yuyio'
// import { AuthProvider } from './AuthProvider';
// import { LoginButton } from './LoginButton';


// function App() {
  
//   return (
//     <AuthProvider>
//     <div className="App">
//       <header className="App-header">
//         <LoginButton />
//       </header>
//     </div>
//     </AuthProvider>
//   );
// }

function App() {
  
  return (
    <div className="App" style={{ height: "100vh", width: "100vw", position: "absolute", top: 0, left: 0 }}>
      <GoogleMapComponent/>
    </div>
  );
}

export default App;
