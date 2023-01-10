// Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Layouts
import App from './App'
import HomePage from './Pages/homepage'
import NewPage from './Pages/newpage'
import PopularPage from './Pages/popularpage'
import TrendingPage from './Pages/trendingpage'
import CategoriPage from './Pages/categoriespage'
import ErrorPage from './Pages/404page'

// Styles
import './web/css/_global.less'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path='/new' element={<App />}>
        <Route index element={<NewPage />} />
      </Route>
      <Route path='/popular' element={<App />}>
        <Route index element={<PopularPage />} />
      </Route>
      <Route path='/trending' element={<App />}>
        <Route index element={<TrendingPage />} />
      </Route>
      <Route path='/categories' element={<App />}>
        <Route index element={<CategoriPage />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
)
