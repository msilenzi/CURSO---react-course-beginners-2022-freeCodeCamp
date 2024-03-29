import React from 'react'
import star from '../images/star.svg'

export default function Card({
  title,
  price,
  coverImg,
  stats: { rating, reviewCount },
  location,
  openSpots,
}) {
  let badgeText
  if (openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (location === 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img className="card__img" src={'./images/' + coverImg} alt={title} />
      <div className="card__stats">
        <img className="card__star" src={star} alt="star" />
        <span>{rating}</span>
        <span className="text--muted">({reviewCount}) &bull;</span>
        <span className="text--muted">{location}</span>
      </div>
      <p className="card__title">{title}</p>
      <p className="card__price">
        <span className="fw--600">From ${price}</span> / person
      </p>
    </div>
  )
}
