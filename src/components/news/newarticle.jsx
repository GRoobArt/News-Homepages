import { Link } from 'react-router-dom'

const NewArticles = ({ name, description, link }) => {
  return (
    <Link to={link} className='articles new'>
      <h2 className='title'>{name}</h2>
      <p>{description}</p>
    </Link>
  )
}

export default NewArticles
