"use client";

import React, { useEffect, useState } from 'react';

function Tours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('/api/tours');
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error("Error fetching the tours:", error);
      }
    };

    fetchTours();
  }, []);

  return (
    <div>
      <h1>Tours Disponibles</h1>
      <ul>
        {tours.length > 0 ? (
          tours.map((tour) => (
            <li key={tour.id}>
              {tour.title} - ${tour.price}
            </li>
          ))
        ) : (
          <li>No hay tours disponibles</li>
        )}
      </ul>
    </div>
  );
}

export default Tours;

