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
    <div className="max-w-screen-lg mx-auto p-4 lg:px-0">
      <h1 className="text-xl mb-4">Hola 👋, este es un documento creado por la comunidad de <a href="https://instagram.com/codealo">Codealo</a> para ayudar a personas a...</h1>
      <ul className="list-disc pl-8 mb-4">
        <li>Inciar su camino como programadores.</li>
        <li>Encontrar recursos para aprender.</li>
        <li>Obtener ideas de proyectos para sus portafolio.</li>
        <li>Aprender sobre las diferentes ramas de programación.</li>
        <li>Tener ayuda con entrevistas.</li>
        <li>Consejos sobre como ser un excelente programador.</li>
      </ul>
      <h3 className="text-xl font-bold">Contenido</h3>
      {Object.keys(languages).map((language: string) => {
        const entries = languages[language];
        return (
          <>
            <h4>{language}</h4>
            <div>
              {entries.contenido}
            </div>
          </>
        )
      })}
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