import {gql} from "graphql-tag";

export const ARTICLE_FRAGMENT = gql`
  fragment articleFragment on Article {
    id
    title
    content {
      raw
    }
  }
`;

export const GET_ARTICLES = gql`
  ${ARTICLE_FRAGMENT}
  query getArticles {
    articles {
      ...articleFragment
      slug
    }
  }
`;

export const GET_ARTICLE = gql`
  ${ARTICLE_FRAGMENT}
  query getArticle($slug: String) {
    article(where: {slug: $slug}) {
      ...articleFragment
      featuredImage {
        url
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      title
      imageUrl
      description
    }
  }
`