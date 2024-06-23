import React from 'react';

export default function CardThumbnail({ imgSrc, imgAlt, link, title, children, styles }) {
  return (
    <div className="card" style={{ width: '18rem', ...styles }}>
      <img src={imgSrc} className="card-img-top" alt={imgAlt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
        <a href={link} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
