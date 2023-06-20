import React from 'react';

export default function Block(props: any) {
  const {title, image, description} = props;
  return (
    <div>
      <h3>{title}</h3>
      <img width="400" height="250" alt="location-reference" src={`${image}`} />
      <p>{description}</p>
    </div>
  )
}