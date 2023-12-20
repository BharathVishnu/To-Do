import React from 'react';

const Footer = () => {
  return (
    <footer className="font-indie text-white text-center p-4">
      <p className="mb-2">
        Created by <span className="font-bold">Bharath Vishnu</span>
      </p>
      <p>
        Check out my GitHub:{' '}
        <a
          href="https://github.com/BharathVishnu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:underline hover:text-blue-500"
        >
          @BharathVishnu
        </a>
      </p>
    </footer>
  );
};

export default Footer;
