import React, { FC } from 'react'


interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <main className={`container`}>{children}</main>;
};

export default Layout;