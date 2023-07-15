import React from 'react'

export default function Select({data,setId}) {
  return (
    <select onChange={(e)=>setId(e)} className='w-full py-2 px-5 text-xl border border-gray-500 rounded-lg'>
        {
            data?.map(item=>{
            return (
                <option className='py-3 ' key={item.id} value={item.id}>{item.name}</option>
            )
            })
        }
    </select>
  )
}
