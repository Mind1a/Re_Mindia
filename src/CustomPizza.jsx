import React, { useState, useEffect } from 'react';
import apiRequest from './apiRequest'; // Adjust the path as needed

const CustomPizza = () => {
  const [loading, setLoading] = useState(true);
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState('');

  //   custom hook-ის გამოყენებით წამოვიღოთ ინფორმაცია db.json-დან და დავამტოთ pizzas-ს state-ში

  const fetchPizzas = async () => {
    const url = 'http://localhost:3500/items';
    setLoading(true);
    const data = await apiRequest(url);
    setLoading(false);

    if (data.error) {
      setError(data.error);
    } else {
      setPizzas(data);
    }
  };

  // წავშალოთ არსებული პიცა db.json-დან და ასევე განვაახლოთ state- რომ ცვლილებები მალევე აისახოს ჩვენს საიტზე.
  const removePizza = async (id) => {
    // ავირჩიოთ კონკრეტულად რომელი ელემენტი გვინდა წავშალოთ (არჩევა ხდება მისი მისამართის მითითებით (url))

    const url = `http://localhost:3500/items/${id}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // განვაახლოთ state-ი, დავამატოთ ყველა პიზა გარდა წაშლილის, წაშლილი პიცას არ ვუშვებთ სიაში.
    const data = await apiRequest(url, options);
    if (data.error) {
      setError(data.error);
    } else {
      setPizzas((prevPizzas) => prevPizzas.filter((pizza) => pizza.id !== id)); // Remove the pizza from the list
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <h2>{pizza.name}</h2>
            <p>Size: {pizza.size}</p>
            <p>Price: ${pizza.price}</p>
            <p>
              Ingredients:{' '}
              {pizza.ingredients
                ? pizza.ingredients.join(', ')
                : 'No ingredients listed'}
            </p>
            <button onClick={() => removePizza(pizza.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomPizza;
