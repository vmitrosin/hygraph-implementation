import {useQuery} from '@apollo/client';
import React from 'react';
import {useParams} from 'react-router-dom';
import {GET_ARTICLE} from '../../graphQL/queries';
import Markdown from '../../components/Markdown';

export default function Article() {
  const {slug} = useParams();
  const {loading, error, data} = useQuery(GET_ARTICLE, {
    variables: {slug}
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1>{data.article.title}</h1>
      <p>{data.article.slug}</p>
      <Markdown content={data.article.content}/>
    </div>
  )
}