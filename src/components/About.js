import React from 'react';

const image = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fc.stocksy.com%2Fa%2FvtmA00%2Fz9%2F2571259.jpg&tbnid=y_1IzbdQEvgnmM&vet=12ahUKEwio1J2RmdqBAxU6pycCHZ-DDrAQMygGegQIARBW..i&imgrefurl=https%3A%2F%2Fwww.stocksy.com%2F2571259%2Fcrying-toddler-girl-with-funny-topknot&docid=tQtEvVktGtGzSM&w=800&h=1200&q=a%20funny%20picture%20of%20a%20girl%20developer%20crying&ved=2ahUKEwio1J2RmdqBAxU6pycCHZ-DDrAQMygGegQIARBW'; 

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Your content goes here.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
