import {useQuery} from '@apollo/react-hooks';
import React from 'react';
import {useParams} from 'react-router-dom';
import { RichText } from '@graphcms/rich-text-react-renderer';
import {GET_ARTICLE} from '../../graphQL/queries';

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

      {data.article.featuredImage.url !== null &&
        <img src={data.article.featuredImage.url} alt={data.article.title} style={{width: 400, height: 'auto'}} />
      }

      <div>
        <RichText content={data.article.content.raw}/>
      </div>
    </div>
  )
}