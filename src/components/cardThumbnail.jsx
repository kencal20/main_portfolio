import React from 'react'

export default function CardThumbnail({ imgSrc,imgAlt,link, title, children }) {
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={imgSrc} class="card-img-top" alt={imgAlt} />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">
                    {children}
                </p>
                <a href={link} class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
