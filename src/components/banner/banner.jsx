const BannerNews = ({
  img,
  title,
  link,
  descriptions,
  typebutton,
  textbutton,
}) => {
  return (
    <section id='top-banner'>
      <div className='banner-img'>
        <img src={img} alt={title} />
      </div>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <div className='description'>
          <p>{descriptions}</p>
          <a href={link} className={`button action-${typebutton}`}>
            {textbutton}
          </a>
        </div>
      </div>
    </section>
  )
}
export default BannerNews
