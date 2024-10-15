import React from 'react';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import "./App.css";
const App = () => {
  return (
    <div>
      <Header />
      <main className="container my-5">
        <BlogPost 
          title="First Blog Post" 
          date="October 14, 2024" 
          content="This is the content of my first blog post. React is awesome!"
        />
        <BlogPost 
          title="Another Post" 
          date="October 13, 2024" 
          content="This is another blog post content."
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
