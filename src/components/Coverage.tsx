import React from 'react';
import MapCanvas from './MapCanvas';

const CountryTag: React.FC<{ name: string, position: string }> = ({ name, position }) => (
    <div className={`absolute ${position}`}>
        <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full bg-gray-300"></span>
            <span>{name}</span>
        </div>
    </div>
);


const Coverage: React.FC = () => {
    const countries = [
        { name: 'France', position: 'top-[20%] left-[10%]' },
        { name: 'Germany', position: 'top-[15%] left-[30%]' },
        { name: 'Mexico', position: 'top-[40%] left-[5%]' },
        { name: 'Japan', position: 'top-[10%] right-[10%]' },
        { name: 'Brazil', position: 'bottom-[10%] left-[20%]' },
        { name: 'Canada', position: 'top-[5%] left-[50%]' },
        { name: 'UK', position: 'bottom-[25%] right-[5%]' },
        { name: 'Colombia', position: 'bottom-[5%] left-[50%]' },
        { name: 'UAE', position: 'bottom-[15%] right-[25%]' },
    ];
    
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="relative inline-block mb-4">
                        <div className="absolute -inset-2 rainbow-gradient rounded-full opacity-60 blur-md"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-1.5 text-sm font-semibold">
                            The world is your oyster
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">Our coverage?<br />Glad you asked.</h2>
                    <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600">Experience premium 5G coverage across the US, and 180+ countries.</p>
                </div>
                <div className="relative h-[300px] md:h-[500px] lg:h-[600px]">
                    <MapCanvas />
                    <div className="hidden lg:block">
                        {countries.map(country => <CountryTag key={country.name} name={country.name} position={country.position} />)}
                        <div className="absolute bottom-[40%] right-[15%]">
                            <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-full px-4 py-2">
                                150+ More
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden flex flex-wrap justify-center gap-2 mt-4">
                         {countries.map(country => (
                            <div key={country.name} className="bg-white/80 backdrop-blur-sm shadow-md rounded-full px-3 py-1.5 text-sm">
                                {country.name}
                            </div>
                         ))}
                         <div className="bg-white/80 backdrop-blur-sm shadow-md rounded-full px-3 py-1.5 text-sm">
                            150+ More
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coverage;
