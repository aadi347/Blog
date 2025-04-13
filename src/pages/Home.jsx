import React, { useState } from 'react';
import { posts } from '../data/posts.js'; // your mock posts data
import PostCard from '../Components/PostCard';
import HeroSection from '../Components/HeroSection.jsx';
import ShowBlog from '../Components/ShowBlog.jsx';
// import BlogGrid from '../Components/BlogGrid.jsx';
import NewsletterSignup from "/Users/adityakumar/Desktop/NewFolio/frontend/src/Components/NewsletterSignup.jsx"
// import Login from '../Components/Login.jsx';
import Footer from '../Components/Footer.jsx';

const categories = ['All', 'React', 'CSS', 'JavaScript'];
const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter(post => post.category === selectedCategory);
    return (
        <div className=''>
            <HeroSection />
            <ShowBlog />
            <NewsletterSignup />
            {/* <BlogGrid /> */}
            {/* <Login /> */}
            <Footer />
        
        </div>
    )
}

export default Home
