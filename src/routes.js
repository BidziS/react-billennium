import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CategoryPage from './components/management/category/CategoryPage';
import ManagePage from './components/management/ManagePage';
import CarrierPage from './components/management/carrier/CarrierPage';
import CoverPage from './components/management/cover/CoverPage';
import CountryList from './components/management/country/CountryList';
import AuthorPage from './components/management/author/AuthorPage';
import BookPage from './components/management/book/BookPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="manage" component={ManagePage}/>
        <Route path="categories" component={CategoryPage}/>
        <Route path="carriers" component={CarrierPage}/>
        <Route path="covers" component={CoverPage}/>
        <Route path="countries" component={CountryList}/>
        <Route path="authors" component={AuthorPage}/>
        <Route path="books" component={BookPage}/>
    </Route>
);
