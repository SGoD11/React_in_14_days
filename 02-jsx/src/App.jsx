import React from 'react';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import "./App.css";
import blogPosts from './blogPosts';
const App = () => {
  return (
    <div>
      <Header />
      <main className="container my-5">
        <div className="row">
        {blogPosts.map((post)=>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <BlogPost 
          key = {post.id}
          img = {post.image}
          title={post.title} 
          date={post.date}
          content={post.content}
        />
        </div>
        )}
        </div>
        
        
      </main>
      <Footer />
    </div>
  );
};

export default App;
