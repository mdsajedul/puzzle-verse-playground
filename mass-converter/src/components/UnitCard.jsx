import React from 'react'
import Select from './Select'

export default function UnitCard({data,setId,cardInfo,onChange,error}) {
  return (
    <div>
        <div className="mb-3">
            <input
            onChange={onChange}
            className="h-16 md:h-28 text-center font-semibold text-2xl border border-gray-500 rounded-lg"
            type="text"
            name=""
            id={cardInfo?.key}
            value={cardInfo.value}
            disabled={error}
            />
        </div>
        <div className="md:py-3">
            <Select data={data} setId={setId} info={cardInfo} />
        </div>
    </div>

  )
}
