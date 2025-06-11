import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>;
};

const Navigation: React.FC<Props> = (props) => {
  return (
    <Link
    className='nav-link'
      to={props.to}
      onClick={props.onClick}
      style={{
        background: props.bg,
        color: props.textColor,
        padding: '8px 16px',
        textDecoration: 'none',
        borderRadius: '4px',
        display: 'inline-block',
      }}
    >
      {props.text}
    </Link>
  );
};

export default Navigation;
