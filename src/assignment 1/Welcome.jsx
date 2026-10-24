// GitHub: https://github.com/marwa-9/welcome-react

function Welcome() { return ( <div className="min-h-screen flex items-center justify-center bg-gray-100"> 

<div className="rounded-2xl bg-white px-10 py-8 text-center shadow-lg">
  
   <h1 className="text-4xl font-bold text-blue-600"> Welcome to My Website  </h1>

    <p className="mt-4 text-lg text-gray-600">
      We are happy to have you here!
    </p>

    <button className="mt-6 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600">
      Get Started
    </button>
  </div>
</div>
); }
export default Welcome;
