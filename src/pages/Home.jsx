import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtifacts, addArtifact, deleteArtifact, updateArtifact } from '../features/artifacts/artifactSlice';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.artifacts);
  const [selected, setSelected] = useState(null);
  
  // Состояния для формы
  const [newTitle, setNewTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (items.length === 0) dispatch(fetchArtifacts());
  }, [dispatch, items.length]);

  // Handle CREATE
  const handleCreate = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), title: newTitle, body: "Засекреченные данные Инквизиции" };
    dispatch(addArtifact(newItem));
    setNewTitle('');
  };

  // Handle DELETE
  const handleDelete = (id) => {
    dispatch(deleteArtifact(id));
    if (selected?.id === id) setSelected(null);
  };

  // Handle UPDATE (включаем режим редактирования)
  const handleSaveUpdate = () => {
    dispatch(updateArtifact({ ...selected, title: newTitle }));
    setIsEditing(false);
    setNewTitle('');
  };

  if (loading) return <div className="wh-loader">СКАНИРОВАНИЕ...</div>;

  return (
    <div className="home-page">
      <h1 className="wh-title">РЕЕСТР АРТЕФАКТОВ</h1>

      {/* ФОРМА СОЗДАНИЯ / РЕДАКТИРОВАНИЯ */}
      <div className="wh-form-container">
        <input 
          value={newTitle} 
          onChange={(e) => setNewTitle(e.target.value)} 
          placeholder="Введите название объекта..."
        />
        {isEditing ? (
          <button onClick={handleSaveUpdate} className="wh-btn update">ОБНОВИТЬ</button>
        ) : (
          <button onClick={handleCreate} className="wh-btn create">ДОБАВИТЬ В РЕЕСТР</button>
        )}
      </div>

      <div className="warhammer-grid">
        <div className="artifact-list">
          {items.map((item) => (
            <div key={item.id} className={`artifact-item ${selected?.id === item.id ? 'active' : ''}`}>
              <span onClick={() => setSelected(item)}>ID-{item.id}: {item.title}</span>
              <button onClick={() => handleDelete(item.id)} className="del-btn">✖</button>
            </div>
          ))}
        </div>

        <div className="artifact-detail">
          {selected ? (
            <div className="detail-content">
              <h2>{selected.title.toUpperCase()}</h2>
              <p>{selected.body}</p>
              <button onClick={() => { setIsEditing(true); setNewTitle(selected.title); }} className="edit-btn">РЕДАКТИРОВАТЬ</button>
            </div>
          ) : (
            <div className="detail-placeholder">ВЫБЕРИТЕ ОБЪЕКТ</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;