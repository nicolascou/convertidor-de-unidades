import React, { useState } from 'react'
import SavedConversions from './SavedConversions';
import Converter from './Converter';

const Main: React.FC = () => {
  const [updateGet, setUpdateGet] = useState(false);

  return (
    <main>
      <div className='main-content'>
        <Converter updateGet={updateGet} setUpdateGet={setUpdateGet} />
        <SavedConversions updateGet={updateGet} />
      </div>
    </main>
  )
}

export default Main