import React from 'react';

export default function CardThumbnail({ imgSrc, imgAlt, link, title, children }) {
  return (
    <div className='card' style={styles.card}>
      <img src={imgSrc} className="card-img-top" alt={imgAlt} style={styles.img} />
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

const styles= {
  card: {
    width: '25rem',
    height: '20rem',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    padding:10
  },
  img:{
    width: '50%',
    height: '50%',
    objectPosition: 'center',
    borderRadius: '10px',

  }
}