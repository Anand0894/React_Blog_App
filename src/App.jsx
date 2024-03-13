import { useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import authservice from "./appwrite/auth";
import {Header ,Footer} from './components/index'
import {login,logout} from './store/authSlices'
import { Outlet } from 'react-router-dom'

export default function App() {
    const [loading , setloading] = useState();
    const dispatch = useDispatch();
    useEffect(()=> { 
        authservice.getCurrentUser()
        .then((userData)=>{
            if(userData){
                dispatch(login({userData}))
            }
            else {
                dispatch(logout())
            }
            }
        ).finally(()=> {
            setloading(false)
        })
     }, [])
     return !loading ? (
        <div className='min-h-screen flex flex-wrap justify-center bg-gray-400 p-5'>
          <div className=' w-10/12 block '>
            <Header />
            <main className=" text-center">
            TODO:  <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      ) : null
}
