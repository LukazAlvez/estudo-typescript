import React from 'react';
import { Header } from '../components/header/header';
import { Content } from '../components/content/content';
import { Post } from '../components/post/post'
import { SearchBar } from '../components/searchBar/searchBar'

function Main() {
  return (
   <>
   <Header />
   <Content>
    <SearchBar />
    <Post>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur dolores ut laborum maiores! Reprehenderit obcaecati harum aperiam aliquam delectus magnam distinctio sit temporibus iusto ipsa! Ea ipsum omnis necessitatibus.</p>
    </Post>
    <Post>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur dolores ut laborum maiores! Reprehenderit obcaecati harum aperiam aliquam delectus magnam distinctio sit temporibus iusto ipsa! Ea ipsum omnis necessitatibus.</p>
    </Post>
   </Content>
   </>
  );
}

export default Main;
