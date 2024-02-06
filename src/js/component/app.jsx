// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Container from './container';
import Footer from './footer';



const App = () => {
  return (
    <div>
      <Navbar/>
        <Container 
        		title="A Warm Welcome"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quae! Quisquam, unde soluta, quod ad tempora facilis sint voluptates magni quidem mollitia error laborum, aspernatur consequatur eum blanditiis itaque ex."
                buttonLabel="Go To Action"
                cardTitle ="Card Title"
                cardTitleButton ="Find Out More!"
        />
        <Footer/>
    </div>
  );
};

// ReactDOM.render(
//   <App />,
//   document.querySelector("#app")
// );

export default App;