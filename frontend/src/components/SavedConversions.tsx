import React from 'react'
import LikedConversion from './LikedConversion';
import { ConversionProps } from '../types';
import { useState, useEffect } from 'react';

interface SavedConversionsProps {
  updateGet: boolean;
}

const SavedConversions: React.FC<SavedConversionsProps> = ({ updateGet }) => {
  const [fetchedConversions, setFetchedConversions] = useState<ConversionProps[]>();

  useEffect(() => {
    fetch('http://localhost:8000')
      .then(response => response.json())
      .then(data => setFetchedConversions(data))
      .catch(error => console.error(error));

  }, [updateGet, setFetchedConversions])

  return (
    <div className='saved-conversions-wrapper'>
      <h3>saved</h3>
      <div className='saved-flex'>
        {
          fetchedConversions &&
          fetchedConversions.map((conversion: ConversionProps) => (
            <LikedConversion key={conversion.id} conversionData={conversion} />
          ))
        }
      </div>
    </div>
  )
}

export default SavedConversions