import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { groupBy } from 'underscore';
import Sidenav from '../components/Sidenav';
import Project from '../components/Project';

interface Props {
  data: any
}


const Index: React.FC<Props> = ({ data }) => {
  const languages = groupBy(data, 'language');

  return (
    <div className="lg:px-0 lg:flex divide-x">
      <div className="hidden lg:block w-1/4">
        <Sidenav languages={languages} />
      </div>
      <div className="md:w-3/4 p-4">
        <h1 className="text-2xl mb-4 font-bold">Idea para proyectos de programación</h1>
        <h2 className="text-lg mb-4">Hola 👋, este es un documento creado por la comunidad de <a href="https://instagram.com/codealo">Codealo</a></h2>
        <p className="mb-2">Por el momento esta organizado por lenguajes de programación.</p>
        <p className="mb-2">Los proyectos son agregados por la comunidad.</p>
        <div className="md:flex mb-4 text-center">
          <a href="https://forms.gle/NxRscYJXuXTXoJ9VA" target="_blank">
            <div className="bg-gray-900 px-4 py-2 text-white rounded-md">
              Agregar un proyecto
          </div>
          </a>
        </div>
        <div className="font-bold">Encuentranos</div>
        <div className="flex flex-wrap divide-x space-x-2 mb-4">
          <a href="https://instagram.com/codealo" target="_blank" className="underline text-blue-700 ">Instagram</a>
          <a href="https://www.youtube.com/channel/UCLdBO2AVbCohANbEtEHn1CA" target="_blank" className="underline text-blue-700 pl-2">YouTube</a>
          <a href="https://twitter.com/codealodev" target="_blank" className="underline text-blue-700 pl-2">Twitter</a>
          <a href="https://discord.gg/FsF3DCkP" target="_blank" className="underline text-blue-700 pl-2">Discord</a>
        </div>

        <h3 className="text-xl font-bold mb-4">Contenido</h3>
        {Object.keys(languages).map((language: string) => {
          const entries = languages[language];
          return (
            <div className="mb-6" key={language}>
              <h4 id={language} className="text-xl font-semibold">{language}</h4>
              <hr className="mr-4 mb-2"></hr>
              <div className="space-y-4">
                {entries.map(e => <Project data={e} />)}
              </div>
            </div>
          )
        })}
      </div>
    </div>)
}


export const getStaticProps: GetStaticProps = async (context) => {
  let props = { data: null, revalidate: 1 };
  try {
    if (process.env.NODE_ENV === 'development') {
      props.data = require('../public/data.json');
    } else {
      const response = await fetch('https://raw.githubusercontent.com/Codealo-Dev/empieza-aqui/main/public/data.json');
      const data = await response.json();
      props.data = data;
    }
  } catch (err) {

  } finally {
    return { props };
  }
}


export default Index;