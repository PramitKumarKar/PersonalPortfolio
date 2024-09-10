import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-2xl">
        Hello! I'm Pramit Kumar Kar, a passionate and dedicated Software Developer with a strong desire to create innovative and user-friendly digital experiences. As a recent Engineering Graduate, I am excited to embark on my professional journey and bring my skills and enthusiasm to contribute to the ever-evolving world of web development.
        </p>

        <br />

        <p className="text-xl">
         I have hands-on experience with languages such as HTML5, CSS3, JavaScript, and various frameworks and libraries like React.js and Tailwind CSS. Through multiple courses and trainings, I have honed my skills in programming languages such as Java, JavaScript, Python and Solidity.
         Throughout creating and learning my way through various academic and personal projects, I have gained experience and fluency in developing visually appealing and intuitive websites.
        </p>
        
        <br />
         <p className="text-xl">
         If you're looking for a passionate and versatile Software Developer with a fresh perspective, I would love to connect with you. Let's collaborate to create seamless, engaging, and impactful web experiences that leave a lasting impression.
         </p>
      </div>
    </div>
  );
};

export default About;