import React from "react";
import Image from "next/image";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      image: "road.jpg", // Replace with your image URL
      title: "Loudest à la Madison #1 (L'Integral)",
      description: "We focus on ergonomics and meeting you where you work.",
      date: "22 May 2023",
      comments: "12 comments",
      isNew: true,
    },
    {
      id: 2,
      image: "car.png",
      title: "Loudest à la Madison #1 (L'Integral)",
      description: "We focus on ergonomics and meeting you where you work.",
      date: "22 May 2023",
      comments: "12 comments",
      isNew: true,
    },
    {
      id: 3,
      image: "umbrella.jpg",
      title: "Loudest à la Madison #1 (L'Integral)",
      description: "We focus on ergonomics and meeting you where you work.",
      date: "22 May 2023",
      comments: "12 comments",
      isNew: true,
    },
  ];

  return (
    <div className="py-12 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Featured Posts</h2>
        <p className="mt-2 text-lg text-gray-600">
          Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics.
        </p>
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                {post.isNew && (
                  <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </span>
                )}
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{post.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.comments}</span>
                </div>
                <button className="mt-4 text-indigo-600 hover:underline text-sm font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;