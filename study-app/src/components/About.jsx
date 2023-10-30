import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-3w px-4" style={{ marginTop: '-80px' }}>
      <img
        className="w-full lg:w-6/1 h-auto"
        src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?size=626&ext=jpg&ga=GA1.1.321417308.1693098394&semt=sph"
        alt="About Us Image"
      />
      <div>
        <div className="space-y-4 lg:pt-14" >
          <h1 className="font-semibold text-4xl text-center md:text-start" style={{ color: '#539165' }}>Why About Us?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            architecto quisquam delectus minima perferendis nulla quia nisi
            laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
            molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
            laboriosam temporibus delectus, aut a? Quasi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

