import React, { FC, useEffect, useState } from 'react';
import { CurrencyItem } from '../CurrencyItem/CurrencyItem';
import './currencies.scss'
import axios from 'axios';

type CurrencyDataType = {
    currency: String
    code: String
    mid: Number
}

export const Currencies: FC = () => {

    const [plnAmount, setPlnAmount] = useState<Number>(0)
    const [date, setDate] = useState<String>('')
    const [currenciesData, setCurrenciesData] = useState<Array<CurrencyDataType>>([])

    const getData = async () => {
        const res = await axios.get('http://api.nbp.pl/api/exchangerates/tables/A/')
        setDate(res.data[0].effectiveDate)
        setCurrenciesData(res.data[0].rates)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='currencies'>
            <h3>{date}</h3>
            <div className='currencyInputBlock'>
                <div>
                    <h4>PLN</h4>
                    <span style={{opacity: '80%'}}>Polski złoty</span>
                </div>
                {/* @ts-ignore */}
                <input type="number" className='currencyInput' placeholder='Podaj kwotę w złotych' onChange={(e) => setPlnAmount(e.target.value)} value={plnAmount} />
            </div>
            {currenciesData.map((item, index) => (
                <CurrencyItem currency={item.currency} code={item.code} mid={item.mid} plnAmount={plnAmount} key={index} />
            ))}
        </div>
    )
}