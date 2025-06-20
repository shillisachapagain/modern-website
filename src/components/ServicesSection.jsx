import React from 'react';
import { BsStack } from 'react-icons/bs';
import { HiLightBulb } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-sky-600" />,
      title: "Software Checks",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-green-400" />,
      title: "Environmentally Consious",
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-lime-400" />,
      title: "Full Repair",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Save Money & Time",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ];

  return (
    <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>
        {/* header */}
        <div className="md:w-1/3 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 md:w-4/5">
            Future of support with new shape
          </h2>
          <p className="text-gray-600 text-lg mb-6 md:w-4/5">
            Discuss your goals, determine the way, fix it
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-lime-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
              </div>
              <span className="text-gray-600">High level computer repairs and checks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-lime-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
              </div>
              <span className="text-gray-600">Environmentally efficient tools and reuse</span>
            </div>
          </div>
          <button
            className="mt-8 bg-lime-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-lime-700 transition-colors"
          >
            Get started
          </button>
        </div>

        {/* services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white max-w-xs cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-lime-600 font-medium hover:text-lime-700 transition-colors"
              >
                LEARN MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
