import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './Components/HelloWorld'
import UseStateCompo, { MasUsoUseState } from './Components/UseStateCompo'
import UseEffectCompo from './Components/UseEffectCompo'

function App() {

  const user = {
    name: "Robbin1238",
    age: 19,
    region : {
      country: "Colombia",
      city: "Bogota"
    },
    contact:{
      email: "robbin1238andres@gmail.com",
      phone: 3104669377
    }
  }

  const saludarFn = (name, age, country) =>{
    alert(`Hola ${name}, tienes ${age}, verdad? y vives en: ${country}`)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="__blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="__blank">
          <img src={reactLogo} className="logo
           react" alt="React logo" />
        </a>
      </div>

      <HelloWorld userInfo={user} saludarFn={saludarFn}/>
      <UseStateCompo/>
      <MasUsoUseState/>
      <UseEffectCompo/>
    </>
  )
  
}

export default App
