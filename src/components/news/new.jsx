import NewArticles from './newarticle'

const NewSeccion = () => {
  return (
    <section id='newarticles'>
      <h1 className='title-news'>New</h1>
      <div className='articlesnews'>
        <NewArticles
          name='Hydrogen VS Electric Cars'
          description='Will hydrogen-fueled cars ever catch up to EVs?'
          link=''
        />
        <NewArticles
          name='The Downsides of Al Artistry'
          description='What are the possible adverse effects of on-demand Al image generation?'
          link=''
        />
        <NewArticles
          name='Is VC Funding Drying Up?'
          description='Private funding by VC firms is down 50% YOY. We take a look at what that means'
          link=''
        />
      </div>
    </section>
  )
}

export default NewSeccion
