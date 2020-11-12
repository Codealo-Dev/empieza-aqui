import React, { useState } from 'react'


const Sidenav: React.FC<{ languages: string[] }> = ({ languages }) => {
  return (
    <div className="p-4">
      <div className="text-gray-900 font-bold text-lg mb-2">Tabla de contenido</div>
      <ul className="text-gray-600 divide-y">
        {Object.keys(languages).map((l: string) => (
          <li key={l} className="py-2"><a href={`#${l}`} className="underline" >
            <div className="w-full">{l}</div>
          </a></li>
        ))}
      </ul>
    </div>
  )
}


export default Sidenav;