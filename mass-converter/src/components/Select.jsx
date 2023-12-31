import React from 'react'

export default function Select({data,setId,info}) {
  return (
    <select
        onChange={(e) => setId(e)}
        className="w-full py-2 px-5 text-xl border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        {data?.map((item) => {
            return (
            <option
                className="py-3"
                selected={info?.key === item.id}
                key={item.id}
                value={item.id}
            >
                {item.name}
            </option>
            );
        })}
    </select>

  )
}
