import React from 'react'
import Select from './Select'

export default function UnitCard({data}) {
  return (
    <div>
        <div>
            <input className='h-28 text-center font-semibold text-2xl border border-gray-500 rounded-lg' type="text" name="" id="" />
        </div>
        <div className='py-3'>
            <Select data={data}/>
        </div>
    </div>
  )
}
