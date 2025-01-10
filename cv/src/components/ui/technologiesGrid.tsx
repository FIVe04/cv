import technologies from "@/lib/shared/technologies";

const TechnologiesGrid = () => {
    const getRandomSpan = () => {
        const spans = ['col-span-1', 'col-span-2', 'col-span-3'];
        return spans[Math.floor(Math.random() * spans.length)];
      };
    
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Our Tech Stack
              </h1>
              <p className="text-lg text-gray-600">
                Building the future with modern technologies
              </p>
            </div>
            
            <div className="grid grid-cols-6 gap-6">
              {technologies.map((tech) => {
                return (
                  <div
                    key={tech.name}
                    className={`${getRandomSpan()} bg-white rounded-xl shadow-lg p-6 
                      transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                      border border-gray-100 group`}
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 flex items-center justify-center rounded-lg 
                        bg-gradient-to-br from-indigo-50 to-blue-50 group-hover:from-indigo-100 
                        group-hover:to-blue-100 transition-colors duration-300">
                        <img src={tech.icon} className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {tech.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
}

export default TechnologiesGrid;