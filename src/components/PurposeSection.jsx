const PurposeSection = () => {
  const features = [
    {
      icon: "🟢",
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of engineers, technicians and marketers",
    },
    {
      icon: "🔵",
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your needs for a seamless, efficient, repair",
    },
  ];

  return (
    <section id="about" className="w-full bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div>
            <div className="text-sm text-lime-600 font-medium mb-2">
              ACHIEVE MORE
            </div>
            <h2 className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-900">
              Core of a project is the team that made it
            </h2>
          </div>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
