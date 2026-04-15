function InputPin(){
    const values=["", "", "", "", "", ""]
    
    return(
        <div className="flex justify-between gap-2">
            {values.map(function(digit, index) {
                return(
                    <input 
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    className="w-10 text-center text-2xl font-bold border-b-2 border-gray-300 focus:border-primary"
                    />
                )
            }) }
        </div>
    )
}

export default InputPin