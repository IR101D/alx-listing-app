import React from "react";
import { CardProps } from "@/interfaces"; // adjust path if needed

const Card: React.FC<CardProps> = ({ title, description, imageUrl, href }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      {imageUrl && (
        <img
          className="w-full h-48 object-cover"
          src={imageUrl}
          alt={title}
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        {href && (
          <a
            href={href}
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
