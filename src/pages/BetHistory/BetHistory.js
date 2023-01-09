import { useEffect, useState } from "react"
import LiveBets from "../../components/LiveBets/LiveBets"
import PastBets from "../../components/PastBets/PastBets"

export default function BetHistory({ user }){
const [fisnishedBets, setFinishedBets] = useState([])
const [earnings, setEarnings] = useState(0)

const getBets = async () => {
    try {
        const response = await fetch(`/api/bets/user/${user._id}`)
        const data = await response.json()
        let netGain = 0
        setFinishedBets(data)
        data.forEach(bet => {
            if(bet.won){
                netGain+= (bet.ammount*(bet.odds-1))
            } else if(!bet.won){
                netGain-=bet.ammount
            }
        });
        setEarnings(100+netGain)
    } catch (error) {
        console.error(error)
    }
}


useEffect(()=>{
    getBets()
}, [])

    return(
        <>
            <ul>
                {fisnishedBets.filter((bet)=>bet.isFinished).map((bet)=>{
                    return(    
                        <PastBets bet={bet}
                        key={bet._id}/>
                    )
                })}
            </ul>
            <ul>
            {fisnishedBets.filter((bet)=>!bet.isFinished).map((bet)=>{
                return(
                    <LiveBets bet={bet}
                    key={bet._id}/>
                )
            })}
            </ul>
        </>
    )
}