import React, { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <ul className="navbar flex flex-wrap text-xl">
    {props.children}

    <style jsx>
      {`
        .navbar :global(a) {
          @apply font-serif text-gray-900;
        }

        .navbar :global(a:hover) {
          @apply no-underline text-gray-600;
        }
      `}
    </style>
  </ul>
);

export { Navbar };
