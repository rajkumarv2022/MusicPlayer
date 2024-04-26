import React from 'react';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br bg-black text-white">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4 animate-bounce">Welcome to Our Music App</h1>
        <p className="text-lg mb-8 animate-pulse">Discover and enjoy unlimited music wherever you are.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            Log In
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            Sign Up
          </button>
        </div>
      </div>
      <div className="mt-12 animate-pulse">
        <img src="/music-player.png" alt="Music Player" className="w-96 rounded-lg shadow-md" />
      </div>
      <div className="flex items-center mt-8">
        {/* <div className="size-16 bg-red-500 rounded-full mr-4 animate-bounce"></div> */}
        {/* <marquee className="text-lg" behavior="scroll" direction="left">Get started now! Register today for unlimited access to music.</marquee> */}
      </div>
    </div>
  );
}

export default LandingPage;
