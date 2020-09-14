import React, { ReactNode } from 'react';

import Copyright from './Copyright';

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <section className="todoapp">{children}</section>

      <Copyright />
    </React.Fragment>
  );
}

export default Layout;
