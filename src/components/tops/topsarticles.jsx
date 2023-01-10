import { Link } from 'react-router-dom'

const TopArticles = ({ link, img, number, name, description }) => {
  return (
    <Link to={link} className='article'>
      <div className='article-img'>
        <img src={img} alt='name' />
      </div>
      <div className='article-content'>
        <h2 className='top-number'>{number}</h2>
        <h3 className='title'>{name}</h3>
        <p className='description'>{description}</p>
      </div>
    </Link>
  )
}

export default TopArticles
