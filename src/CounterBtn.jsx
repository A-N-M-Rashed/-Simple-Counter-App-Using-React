import './index.css'
const CounterBTN = ({isIncrement,handleCount})=>{
return (
        <div 
        onClick={handleCount}
        className={`${isIncrement? 
            "bg-green-500 hover:bg-green-600" 
            : "bg-red-500 hover:bg-red-700"
        } text-white px-3 rounded-md w-fit cursor-pointer `
        }>
            {isIncrement ? "+" : "-"}
        </div>
    )
}

export default CounterBTN;