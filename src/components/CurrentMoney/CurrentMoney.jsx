import { useEffect, useState } from "react";

export default function CurrentMoney({user, submitBet}){
    const [earnings, setEarnings] = useState(0)

    
    const calculateMoney = async () => {
        try {
            const response = await fetch(`/api/bets/user/${user._id}`)
            const data = await response.json()
            let netGain = 0 
            data.forEach(bet => {
                if(bet.won){
                    netGain+= (bet.ammount*(bet.odds-1))
                } else {
                    netGain-=bet.ammount
                }
            });
            setEarnings(100+netGain)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        calculateMoney()
    }, [submitBet])
    
    return(
        <div>
            <h3>You have a total of ${earnings}</h3>
        </div>
    )
}