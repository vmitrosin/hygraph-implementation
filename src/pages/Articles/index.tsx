import {useQuery} from '@apollo/client';
import React from 'react';
import {GET_ARTICLES} from '../../graphQL/queries';
import {Link} from 'react-router-dom';

export default function Articles() {
  const {loading, error, data} = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h1>Articles</h1>
      {data.articles.map(({id, title, slug}: any) => {
        return (
          <div key={id}>
            <h2>{title}</h2>
            <Link to={`/articles/${slug}`}>Read more</Link>
          </div>
        )
      })}
    </>
  )
}