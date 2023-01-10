import BannerNews from '../components/banner/banner'
import NewSeccion from '../components/news/new'
import ListTop from '../components/tops/topslist'

const HomePage = () => {
  return (
    <div id='homepage'>
      <h1 className='titlepage'>Homepage</h1>
      <div id='newbanner'>
        <BannerNews
          img='../../image-web-3-desktop.jpg'
          title='The Bright Future of Web 3.0?'
          descriptions='We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?'
          link='#'
          textbutton='Read More'
          typebutton='primary'
        />
        <NewSeccion />
        <ListTop />
      </div>
    </div>
  )
}

export default HomePage
