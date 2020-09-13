import React from 'react';

type Props = {
  children: React.ReactNode;
};

function IndexPage({ children }: Props) {
  return <React.Fragment>{children}</React.Fragment>;
}

export default IndexPage;
