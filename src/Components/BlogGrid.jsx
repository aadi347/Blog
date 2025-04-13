import React from 'react';

const BlogGrid = () => {
  const cards = [
    { id: 1, title: "React Basics", desc: "Learn the core concepts of React.", img: "https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg" },
    { id: 2, title: "CSS Tricks", desc: "Master Flexbox & Grid.", img: "/img2.jpg" },
    { id: 3, title: "JavaScript Power", desc: "Deep dive into ES6 and more.", img: "/img3.jpg" },
    { id: 4, title: "Building UIs", desc: "Design responsive layouts easily.", img: "/img4.jpg", span: 2 },
    { id: 5, title: "Frontend Tools", desc: "Explore tools for faster dev.", img: "/img5.jpg" },
    { id: 6, title: "Async in JS", desc: "Promises, async/await demystified.", img: "/img6.jpg" },
    { id: 7, title: "Large Scale React", desc: "Scale React apps the right way.", img: "/img7.jpg", span: 2 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-black">
      {cards.map(card => (
        <div
          key={card.id}
          className={`relative rounded-xl overflow-hidden h-64 text-white ${
            card.span ? `col-span-${card.span}` : ''
          }`}
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-start">
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-sm mb-4">{card.desc}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded w-fit">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
