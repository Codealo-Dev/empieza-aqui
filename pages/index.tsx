import React, { useState } from 'react';
import { GetStaticProps } from 'next';

interface Props {
  data: any
}


const Index: React.FC<Props> = (props) => {
  return (<div ></div>)
}


export const getStaticProps: GetStaticProps = async (context) => {
  let props = { data: null, revalidate: 1 };
  try {
    
  } catch (err) {

  } finally {
    return { props };
  }
}


export default Index;