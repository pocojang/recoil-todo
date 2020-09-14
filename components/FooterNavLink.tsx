import Link from 'next/link';
import React, { useMemo } from 'react';

type Props = {
  children: React.ReactNode;
  currentPath: string;
  asPath: string;
  href: string;
};

function FooterNavLink({ children, currentPath, asPath, href }: Props) {
  const isActive = useMemo(() => currentPath === asPath, [currentPath, asPath]);

  return (
    <React.Fragment>
      <Link href={href} as={asPath}>
        <li>
          <a className={isActive ? 'selected' : 'null'}>{children}</a>
        </li>
      </Link>

      <style jsx>{`
        a {
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
}

export default React.memo(FooterNavLink);
