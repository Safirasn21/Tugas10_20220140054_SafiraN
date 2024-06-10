import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to rara's React App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="btn btn-primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>BOYNEXTDOOR</h2>
            <p>
            BoyNextDoor (보이넥스트도어) adalah grup vokal pria asal Korea Selatan yang dibentuk oleh KOZ Entertainment, anak perusahaan dari Hybe.
            Grup ini terdiri dari enam anggota: Sungho, Riwoo, Jaehyun, Taesan, Leehan, dan Woonhak.
            Grup ini memulai debutnya pada 30 Mei 2023, dengan album single Who!.
            </p>
            <img src="https://i.pinimg.com/564x/79/e6/72/79e6724a3a483eab215a779318c5d8ad.jpg" alt="React Example" className="custom-image" />
          </div>
          <div className="col-md-6">
            <h2>IVE</h2>
            <p>
            IVE (Hangul: 아이브; Katakana: アイヴ) adalah grup idola wanita dari Korea Selatan yang dibentuk oleh Starship Entertainment pada tahun 2021.
            Grup ini ini terdiri dari enam anggota yaitu Gaeul, Yujin, Rei, Wonyoung, Liz, Leeseo.
            Mereka debut pada 1 Desember 2021 dengan single album "Eleven".
            </p>
            <img src="https://i.pinimg.com/736x/52/f6/1b/52f61bfd2a840d1f1b3636aada5df1ce.jpg" alt="React Benefits" className="custom-image" />
          </div>
        </div>
      </div>
      <footer className="App-footer">
        <p>Created with love by rara!</p>
      </footer>
    </div>
  );
}

export default App;