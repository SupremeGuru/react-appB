import React, { createContext , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ExchangeContext = createContext()


const ExchangeContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [transactPin,setTransactPin] = useState(["","","",""]);
    const [confirmPin,setConfirmPin] = useState(["","","",""]);
    const [verifiedPin,setVerifiedPin]= useState(false)
    const checkPin = (transactPin,confirmPin) => {    
        if (transactPin === confirmPin ) {
            setVerifiedPin(true)
            // navigate("/SignIn")
            return
        }else {
            toast.error("Pins do not match")
        }
    }

    const value={
        transactPin,confirmPin,setTransactPin,setConfirmPin,checkPin,verifiedPin
    }
    return (
        <ExchangeContext.Provider value={value}>
            {children}
        </ExchangeContext.Provider>
    )
}

export default ExchangeContextProvider
