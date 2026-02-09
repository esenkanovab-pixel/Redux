import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtifacts } from '../features/artifacts/artifactSlice';
import './Home.css'; // Не забудь создать этот CSS файл

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.artifacts);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    dispatch(fetchArtifacts());
  }, [dispatch]);

  if (loading) return <div className="wh-loader">СКАНИРОВАНИЕ СЕКТОРА...</div>;

  return (
    <div className="home-page">
      <h1 className="wh-title">АРСЕНАЛ ИМПЕРИУМА</h1>
      
      <div className="warhammer-grid">
        {/* LIST */}
        <div className="artifact-list">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`artifact-item ${selected?.id === item.id ? 'active' : ''}`}
              onClick={() => setSelected(item)}
            >
              ID-{item.id}: {item.title.substring(0, 20)}...
            </div>
          ))}
        </div>

        {/* DETAIL */}
        <div className="artifact-detail">
          {selected ? (
            <div className="detail-content">
              <h2>{selected.title.toUpperCase()}</h2>
              <p>{selected.body}</p>
              <div className="seal">ОДОБРЕНО</div>
            </div>
          ) : (
            <div className="detail-placeholder">ВЫБЕРИТЕ ОБЪЕКТ ДЛЯ ИЗУЧЕНИЯ</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;