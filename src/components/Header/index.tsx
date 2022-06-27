import React from 'react'

interface Props {
  title: String;
  sub_title: String;
}

const Header = ({title, sub_title}: Props) => {
  return (
    <header>
      <div className='container'>
        <h1>{title}</h1>
        <p>{sub_title}</p>
      </div>
    </header>
  );
}

export default Header