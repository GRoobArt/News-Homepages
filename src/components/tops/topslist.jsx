import TopArticles from './topsarticles'

const ListTop = () => {
  return (
    <section id='topnews'>
      <TopArticles
        link=''
        img='/image-retro-pcs.jpg'
        number='01'
        name='Reviving Retro PCs'
        description='What happens when old PCs are given modern upgrades?'
      />
      <TopArticles
        link=''
        img='/image-top-laptops.jpg'
        number='02'
        name='Reviving Retro PCs'
        description='What happens when old PCs are given modern upgrades?'
      />
      <TopArticles
        link=''
        img='/image-gaming-growth.jpg'
        number='03'
        name='The Growth of Gaming'
        description='How the pandemic has sparked fresh opportunities.'
      />
    </section>
  )
}

export default ListTop
