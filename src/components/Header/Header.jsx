import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  // Подключаем твой счетчик из Redux как "Уровень Угрозы" или "Боезапас"
  const count = useSelector((state) => state.counter);

  return (
    <header className="wh-header">
      <div className="wh-container">
        <div className="wh-logo">
          <div className="aquila"></div>
          <h1>IMPERIUM<span>_REDUX</span></h1>
        </div>

        <nav className="wh-nav">
          <ul className="wh-nav-list">
            <li><a href="/" className="wh-link">ЦИТАДЕЛЬ</a></li>
            <li><a href="/arsenal" className="wh-link">АРСЕНАЛ</a></li>
            <li><a href="/codex" className="wh-link">КОДЕКС</a></li>
            <li><a href="/orders" className="wh-link">ДИРЕКТИВЫ</a></li>
          </ul>
        </nav>

        <div className="wh-status-panel">
          <div className="wh-counter">
            <span className="label">PURGE_COUNT:</span>
            <span className="value">{count || 0}</span>
          </div>
          <button className="wh-auth-btn">АВТОРИЗАЦИЯ</button>
        </div>
      </div>
      <div className="wh-border-bottom"></div>
    </header>
  );
};

export default Header;