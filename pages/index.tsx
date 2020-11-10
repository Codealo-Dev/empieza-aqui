import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { groupBy } from 'underscore';

interface Props {
  data: any
}


const Index: React.FC<Props> = ({ data }) => {
  const languages = groupBy(data, 'language');
  console.log(languages);
  return (
    <div className="max-w-screen-lg mx-auto p-4 lg:px-0 lg:flex divide-x">
      <div className="w-3/4">
        <h1 className="text-xl mb-4">Hola 👋, este es un documento creado por la comunidad de <a href="https://instagram.com/codealo">Codealo</a> para ayudar a personas a...</h1>
        <ul className="list-disc pl-8 mb-4">
          <li>Inciar su camino como programadores.</li>
          <li>Encontrar recursos para aprender.</li>
          <li>Obtener ideas de proyectos para sus portafolio.</li>
          <li>Aprender sobre las diferentes ramas de programación.</li>
          <li>Tener ayuda con entrevistas.</li>
          <li>Consejos sobre como ser un excelente programador.</li>
        </ul>
        <div className="font-bold">Encuentranos</div>
        <div className="flex flex-wrap divide-x space-x-2 mb-4">
          <a className="underline text-blue-700 ">Instagram</a>
          <a className="underline text-blue-700 pl-2">YouTube</a>
          <a className="underline text-blue-700 pl-2">Twitter</a>
          <a className="underline text-blue-700 pl-2">Discord</a>
        </div>
        <h3 className="text-xl font-bold mb-4">Contenido</h3>
        {Object.keys(languages).map((language: string) => {
          const entries = languages[language];
          return (
            <React.Fragment key={language}>
              <h4 id={language} className="text-lg font-semibold">{language}</h4>
              <hr className="mr-4 mb-2"></hr>
              {entries.map(e => <div>{e.content}</div>)}
            </React.Fragment>
          )
        })}
      </div>
      <div className="hidden lg:block w-1/4 px-4">
        <div className="text-gray-900 font-bold text-lg">Tabla de contenido</div>
        <ul className="text-gray-600">
          {Object.keys(languages).map((l: string) => (
            <li key={l}><a href={`#${l}`} className="underline" >{l}</a></li>
          ))}
        </ul>
      </div>
    </div>)
}


export const getStaticProps: GetStaticProps = async (context) => {
  let props = { data: null, revalidate: 1 };
  try {
    const response = await fetch('https://raw.githubusercontent.com/Codealo-Dev/empieza-aqui/main/public/data.json');
    const data = await response.json();
    props.data = data;
  } catch (err) {

  } finally {
    return { props };
  }
}


export default Index;