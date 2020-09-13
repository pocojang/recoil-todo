import React from 'react';

type Props = {
  children: React.ReactNode;
};

function StatusPage({ children }: Props) {
  return <React.Fragment>{children}</React.Fragment>;
}

export default StatusPage;
