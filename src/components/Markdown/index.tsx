import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
  content: string
}

export default function Markdown(props: MarkdownProps):JSX.Element {
  const {content} = props;
  return (
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
  )
}