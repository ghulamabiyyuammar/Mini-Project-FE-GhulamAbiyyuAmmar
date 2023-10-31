import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-4 bg-[url('./assets/background.avif')] bg-cover bg-no-repeat ">
      <div className="md:w-2/4 text-center order-2 md:order-1 mt-5" style={{ marginTop: '-130px' }}>
        <div>
          <h2 className="text-5xl font-semibold leading-tight text-white">Welcome to your Knowledge With</h2>
          <span className="text-brightGreen font-semibold text-5xl" style={{ color: '#17CF97' }}>StudyWeb</span>
          <p className="text-lightText mt-2 text-start" style={{ color: '#ABB8C3' }}>
            Website yang berisikan media-media pembelajaran serta sumber-sumber pembelajaran yang disesuaikan dengan kebutuhan penggunanya.
          </p>
          <button className="bg-transparan-900 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded-full border-2 border-brightGreen mt-4">
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;


