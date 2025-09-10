import { useState } from "react";

const AboutSite = () => {
  const sections = [
    {
      title: "About Site",
      content:
        "Our site is about restaurant menu and you can order Iranian and foreign food...",
    },
    {
      title: "About Us",
      content:
        "What is the use of the network? What is a network? In words, it is a group of people...",
    },
    {
      title: "Registration Training and Login",
    },
    {
      title: "Registration Training and Login",
    },
    {
      title: "Registration Training and Login",
    },
  ];

  const [visibleSections, setVisibleSections] = useState(
    Array(sections.length).fill(false)
  );

  const toggleSection = (index) => {
    const newVisible = [...visibleSections];
    newVisible[index] = !newVisible[index];
    setVisibleSections(newVisible);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-4">
      <div className="space-y-6 max-w-3xl mx-auto">
        {sections.map((section, index) => (
          <div key={index}>
            <p
              className="pag border p-4 cursor-pointer bg-white font-semibold text-lg rounded-lg shadow-sm hover:bg-gray-50 transition"
              onClick={() => toggleSection(index)}
            >
              {section.title}
            </p>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                visibleSections[index]
                  ? "max-h-96 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div
                className={`border p-4 bg-white rounded-lg transform transition-transform duration-700 ease-in-out ${
                  visibleSections[index] ? "translate-y-0" : "-translate-y-2"
                }`}
              >
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSite;
