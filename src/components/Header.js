import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <h1>Selamat Datang Di burjo Mandiri</h1>
        <h3>Mau Pesan Apa Hari ini?</h3>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </header>
  );
}