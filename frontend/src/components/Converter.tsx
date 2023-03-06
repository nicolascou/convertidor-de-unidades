import React, { useState, useEffect } from 'react';
import { conversionValues } from '../conversionValues';
import LikeButton from './LikeButton';

interface ConverterProps {
  updateGet: boolean;
  setUpdateGet: React.Dispatch<React.SetStateAction<boolean>>;
}

const Converter: React.FC<ConverterProps> = ({ updateGet, setUpdateGet }) => {
  const [inputQuantity, setInputQuantity] = useState<string>('0');
  const [unit, setUnit] = useState<string>('km');
  const [result, setResult] = useState<(string | number)[]>([0, 'mi']);
  
  const clearInput = () => {
    setInputQuantity('0');
    // Wait for post request to resolve before get request
    setTimeout(() => {
      setUpdateGet(!updateGet);
    }, 300)
  }

  const switchUnits = () => {
    if (typeof result[0] === 'string' && typeof result[1] == 'string') {
      setInputQuantity(result[0]);
      setUnit(result[1]);
    }
  }

  useEffect(() => {
    const handleConversion = (quantity: string, unit: string) => {
      if (unit === 'km' || unit === 'mi' || unit === 'm' || unit === 'ft' || unit === 'cm' || unit === 'in') {
        const output = [
          (Number(conversionValues[unit][0]) * Number(quantity)).toFixed(2),
          conversionValues[unit][1]
        ]
        setResult(output);
      }
    }
    handleConversion(inputQuantity, unit);

  }, [inputQuantity, unit])
  
  return (
    <div className='converter-wrapper'>
      <h2>convert</h2>

      <div className='converter-row align-end responsive-row1'>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <select name="conversion" id="conversion" value={unit} onChange={e => setUnit(e.target.value)}>
            <option value="km">kilometers &rarr; miles</option>
            <option value="mi">miles &rarr; kilometers</option>
            <option value="m">meters &rarr; feet</option>
            <option value="ft">feet &rarr; meters</option>
            <option value="cm">centimeters &rarr; inches</option>
            <option value="in">inches &rarr; centimeters</option>
          </select>
          <button className='btn' onClick={switchUnits}>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.53033 1.53033C3.82322 1.23744 3.82322 0.762563 3.53033 0.46967C3.23744 0.176777 2.76256 0.176777 2.46967 0.46967L0.46967 2.46967C0.176777 2.76256 0.176777 3.23744 0.46967 3.53033L2.46967 5.53033C2.76256 5.82322 3.23744 5.82322 3.53033 5.53033C3.82322 5.23744 3.82322 4.76256 3.53033 4.46967L2.81066 3.75H13C13.4142 3.75 13.75 3.41421 13.75 3C13.75 2.58579 13.4142 2.25 13 2.25H2.81066L3.53033 1.53033Z" fill="white"/>
              <path d="M12.4697 8.46967C12.1768 8.76256 12.1768 9.23744 12.4697 9.53033L13.1893 10.25H3C2.58579 10.25 2.25 10.5858 2.25 11C2.25 11.4142 2.58579 11.75 3 11.75H13.1893L12.4697 12.4697C12.1768 12.7626 12.1768 13.2374 12.4697 13.5303C12.7626 13.8232 13.2374 13.8232 13.5303 13.5303L15.5303 11.5303C15.8232 11.2374 15.8232 10.7626 15.5303 10.4697L13.5303 8.46967C13.2374 8.17678 12.7626 8.17678 12.4697 8.46967Z" fill="white"/>
            </svg>
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="text" id='quantity' value={inputQuantity} onChange={(e) => setInputQuantity(e.target.value)} />
          <label htmlFor="quantity">{unit}</label>
        </div>
      </div>

      <div className='converter-row align-center responsive-row2'>
        <LikeButton inputQuantity={inputQuantity} unit={unit} result={result} clearInput={clearInput} />
        <div className='result'>
          <p className='result-number'>{result[0]}</p>
          <p className='result-unit'>{result[1]}</p>
        </div>
      </div>

    </div>
  )
}

export default Converter