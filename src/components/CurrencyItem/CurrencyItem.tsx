import React, { FC, useEffect, useState } from 'react';
import './currencyItem.scss'

type CurrencyItemType = {
    currency: String
    code: String
    mid: Number
    plnAmount: Number
}

export const CurrencyItem: FC<CurrencyItemType> = ({ currency, code, mid, plnAmount }) => {

    const [result, setResult] = useState<String>('')

    const convert = () => {
        //@ts-ignore
        const res = 1 / mid * plnAmount
        if (res !== 0 && res > 0) {
            setResult(res.toString())
        } else {
            setResult ('')
        }
    }

    useEffect(() => {
        convert()
    }, [plnAmount])

    return (
        <div className='currencyItem'>
            <div>
                <h4>{code}</h4>
                <span style={{ opacity: '80%' }}>{currency}</span>
            </div>
            <div className='d-flex flex-column align-items-end'>
                <div>{result}</div>
                <div>{`1 ${code} = ${mid} PLN`}</div>
            </div>
        </div>
    )
}