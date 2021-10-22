import React from 'react';
import { useContext } from 'react';
import { Header } from '../components';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import categories from '../constants/categories';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <CategoryList listName="Em alta" category={categories.trending}></CategoryList>
      <CategoryList listName="Recomendados" category={categories.topRated}></CategoryList>
      <CategoryList listName="Ação" category={categories.actionMovies}></CategoryList>
      <CategoryList listName="Comédia" category={categories.comedyMovies}></CategoryList>
    </div>
  );
};

export default Home;
