import React,{useId} from 'react'

function InputBox({
    label ="",
    amount=0,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {

   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm  flex ${className}`}>
            <div className="w-1/2">
                <label  className='text-black/40 mb-2 inline-block'>{label}</label>
                <input
                
                    className='w-full outline-none border bg-transparent rounded py-2'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => { onAmountChange && onAmountChange(Number(e.target.value)) }}
                    type='number' />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <label  className='text-black/40 mb-2 inline-block'>Currency Type</label>
                <select
             
                    className='w-full rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectedCurrency}
                    onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
                </select>
            </div>
        </div>
    )
}

export default InputBox