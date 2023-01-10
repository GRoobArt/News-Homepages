import HeaderMenu from '../components/header/header'

const LayoutPage = ({ children }) => {
  return (
    <>
      <HeaderMenu />
      <main className='main-container'>{children}</main>
    </>
  )
}

export default LayoutPage
