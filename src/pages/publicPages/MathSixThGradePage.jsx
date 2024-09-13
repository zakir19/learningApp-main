const MathSixThGradePage = () => {
  // Sample data for video collection
 
  const videoCollection1 = [
    { id: 1, title: 'Introduction to Number Systems', thumbnail: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Whole Numbers', thumbnail: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Integers', thumbnail: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Fractions and Decimals', thumbnail: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Algebraic Expressions', thumbnail: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Equations and Inequalities', thumbnail: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Geometry', thumbnail: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Measurement', thumbnail: 'https://via.placeholder.com/150' },
    { id: 9, title: 'Data Analysis and Probability', thumbnail: 'https://via.placeholder.com/150' },
    // Add more videos as needed...
  ];

  // Sample data for the main video
  const mainVideo = {
    title: 'Introduction to Mathematics',
    subtopics: ['Number systems', 'Whole numbers', 'Integers','Fractions and decimals', 'Algebraic expressions', 'Equations and inequalities', 'Geometry', 'Measurement', 'Data analysis and probability'],
    videoUrl: 'https://www.example.com/sample-video.mp4', // Replace with actual video URL
    description: 'This video covers the basics of programming, including variables, data types, and control flow. Learn the foundational concepts to start coding effectively.',
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Learning Platform</h1>
          <nav className="space-x-4">
            <button className="hover:text-gray-200">Home</button>
            <button className="hover:text-gray-200">Courses</button>
            <button className="hover:text-gray-200">Login</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col">
          <div className="flex space-x-4 mb-4">
            {/* Right Column: Main Video Player */}
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col w-2/3">
              <h2 className="text-2xl font-semibold mb-4">{mainVideo.title}</h2>
              <div className="overflow-hidden">
                <video controls className="w-full h-80 bg-black">
                  <source src={mainVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold mb-2">Subtopics:</h3>
                <ul className="list-disc pl-5">
                  {mainVideo.subtopics.map((subtopic, index) => (
                    <li key={index} className="mb-1">{subtopic}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Left Column: Video Collection */}
            <div className="bg-white rounded-lg shadow-md p-4 w-1/3">
              <div className="overflow-y-hidden">
                <h2 className="text-2xl font-semibold mb-4">Course Collection</h2>
                <div className="grid grid-cols-1 gap-4">
                  {videoCollection1.map((video,i) => (
                    <div key={video.id} className="bg-gray-100 rounded-lg overflow-hidden flex">
                      <img src={video.thumbnail} alt={video.title} className="w-44 h-28 object-cover" />
                      <div className="p-2">
                        <span className="text-sm font-semibold">{`${i+1}.  `}{video.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About the Video */}
          <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <h2 className="text-2xl font-semibold mb-4">About the Video</h2>
            <p className="text-gray-600">{mainVideo.description}</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          © 2024 Learning Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MathSixThGradePage;
