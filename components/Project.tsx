import React, { useState } from 'react'

const levels = [
  'Principiante',
  'Básico',
  'Intermedio',
  'Avanzado',
  'Experto'
]

const Project: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="shadow p-4">
      <h4 className="text-lg font-bold">{data.name}</h4>
      <div className="text-sm text-gray-700 mb-2">Nível: {levels[data.level]}</div>
      <div>
        <p>{data.content}</p>
      </div>
    </div>)
}


export default Project;