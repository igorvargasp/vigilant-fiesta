import { useState } from "react"





const API_URL = `http://localhost:3000/`


export const Form = () => {

    const [amount, setAmout] = useState();
    const [description, setDescription] = useState();
    const [showInfo, setShowInfo] = useState();


    const handleSubmit = async () => {
        try {
          const response = await fetch(`${API_URL}/postTransaction`, {
            method: "POST",
            body: JSON.stringify({
                amount,
                description
            })
         })          

         if(response.status === 200){
            setShowInfo(true)
            setDescription("")
            setAmout("")
         }
        } catch (error) {
            console.log(error)
            setShowInfo(false);
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <label>Amount</label>
            <input type="number" onChange={(e) => setAmout(e.currentTarget.value )}/>/>
            <label>Description</label>
            <textarea type="text" onChange={(e) => setDescription(e.currentTarget.value )}/>
            <button type="button" onClick={() => handleSubmit()}>Submit</button>
            {showInfo && <span>{amount} ${description}</span>}
        </div>
    )
}