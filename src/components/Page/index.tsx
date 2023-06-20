import React, {ReactNode} from 'react';
import Navigation from '../Navigation';

interface PageProps {
  component: ReactNode;
}

export default function Page(props: PageProps): JSX.Element {
  const {component} = props;
  return (
    <div>
      <Navigation />
      <main>
        {component}
      </main>
    </div>
  )
}