import {useQuery} from '@apollo/client';
import React from 'react';
import {GET_PRODUCTS} from '../../graphQL/queries';

export default function Products() {
  const {loading, error, data} = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  
  return (
    data.products.map(({id, title, description, imageUrl}: any) => (
      <div key={id}>
        <h3>{title}</h3>
        <img src={imageUrl} alt={title} width="300" height="auto"/>
        <div>{description}</div>
      </div>
    ))
  )
}