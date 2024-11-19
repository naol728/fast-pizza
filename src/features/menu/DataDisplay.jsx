import React, { useEffect, useState } from 'react';

const DataDisplay = () => {
  // State to hold the fetched data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(' https://react-fast-pizza-api.onrender.com/api/order/IIDSAT'); // Change URL to your API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json(); // Convert to JSON
        setData(jsonData); // Update state with fetched data
      } catch (error) {
        setError(error.message); // Set error if fetching fails
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once after the initial render

  // Conditional rendering based on loading state and errors
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display JSON data */}
    </div>
  );
};

export default DataDisplay;
/*

menu
{ 
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Margherita",
      "unitPrice": 12,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "basil"
      ],
      "soldOut": false
    },
    {
      "id": 2,
      "name": "Capricciosa",
      "unitPrice": 14,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-2.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "ham",
        "mushrooms",
        "artichoke"
      ],
      "soldOut": true
    },
    {
      "id": 3,
      "name": "Romana",
      "unitPrice": 15,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-3.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "prosciutto"
      ],
      "soldOut": false
    },
    {
      "id": 4,
      "name": "Prosciutto e Rucola",
      "unitPrice": 16,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-4.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "prosciutto",
        "arugula"
      ],
      "soldOut": false
    },
    {
      "id": 5,
      "name": "Diavola",
      "unitPrice": 16,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-5.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "spicy salami",
        "chili flakes"
      ],
      "soldOut": false
    },
    {
      "id": 6,
      "name": "Vegetale",
      "unitPrice": 13,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-6.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "bell peppers",
        "onions",
        "mushrooms"
      ],
      "soldOut": false
    },
    {
      "id": 7,
      "name": "Napoli",
      "unitPrice": 16,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-7.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "fresh tomato",
        "basil"
      ],
      "soldOut": false
    },
    {
      "id": 8,
      "name": "Siciliana",
      "unitPrice": 16,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-8.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "anchovies",
        "olives",
        "capers"
      ],
      "soldOut": true
    },
    {
      "id": 9,
      "name": "Pepperoni",
      "unitPrice": 14,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-9.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "pepperoni"
      ],
      "soldOut": false
    },
    {
      "id": 10,
      "name": "Hawaiian",
      "unitPrice": 15,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-10.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "pineapple",
        "ham"
      ],
      "soldOut": false
    },
    {
      "id": 11,
      "name": "Spinach and Mushroom",
      "unitPrice": 15,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-11.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "spinach",
        "mushrooms"
      ],
      "soldOut": false
    },
    {
      "id": 12,
      "name": "Mediterranean",
      "unitPrice": 16,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-12.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "sun-dried tomatoes",
        "olives",
        "artichoke"
      ],
      "soldOut": false
    },
    {
      "id": 13,
      "name": "Greek",
      "unitPrice": 16,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-13.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "spinach",
        "feta",
        "olives",
        "pepperoncini"
      ],
      "soldOut": true
    },
    {
      "id": 14,
      "name": "Abruzzese",
      "unitPrice": 16,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-14.jpg",
      "ingredients": [
        "tomato",
        "mozzarella",
        "prosciutto",
        "arugula"
      ],
      "soldOut": false
    },
    {
      "id": 15,
      "name": "Pesto Chicken",
      "unitPrice": 16,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-15.jpg",
      "ingredients": [
        "pesto",
        "mozzarella",
        "chicken",
        "sun-dried tomatoes",
        "spinach"
      ],
      "soldOut": false
    },
    {
      "id": 16,
      "name": "Eggplant Parmesan",
      "unitPrice": 15,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-16.jpg",
      "ingredients": [
        "marinara",
        "mozzarella",
        "eggplant",
        "parmesan"
      ],
      "soldOut": false
    },
    {
      "id": 17,
      "name": "Roasted Veggie",
      "unitPrice": 15,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-17.jpg",
      "ingredients": [
        "marinara",
        "mozzarella",
        "zucchini",
        "eggplant",
        "peppers",
        "onions"
      ],
      "soldOut": false
    },
    {
      "id": 18,
      "name": "Tofu and Mushroom",
      "unitPrice": 15,
      "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-18.jpg",
      "ingredients": [
        "marinara",
        "mozzarella",
        "tofu",
        "mushrooms",
        "bell peppers"
      ],
      "soldOut": false
    }
  ]
}    */

/* order /test id
  {
    "status": "success",
    "data": {
      "customer": "Jonas Schmedtmann",
      "status": "delivered",
      "priority": true,
      "cart": [
        {
          "addIngredients": [],
          "removeIngredients": [],
          "pizzaId": 1,
          "name": "Margherita",
          "quantity": 2,
          "unitPrice": 12,
          "totalPrice": 24
        },
        {
          "addIngredients": [],
          "removeIngredients": [],
          "pizzaId": 4,
          "name": "Prosciutto e Rucola",
          "quantity": 3,
          "unitPrice": 16,
          "totalPrice": 48
        },
        {
          "addIngredients": [],
          "removeIngredients": [],
          "pizzaId": 6,
          "name": "Vegetale",
          "quantity": 1,
          "unitPrice": 13,
          "totalPrice": 13
        },
        {
          "addIngredients": [],
          "removeIngredients": [],
          "pizzaId": 7,
          "name": "Napoli",
          "quantity": 2,
          "unitPrice": 16,
          "totalPrice": 32
        },
        {
          "addIngredients": [],
          "removeIngredients": [],
          "pizzaId": 11,
          "name": "Spinach and Mushroom",
          "quantity": 2,
          "unitPrice": 15,
          "totalPrice": 30
        }
      ],
      "id": "IIDSAT",
      "estimatedDelivery": "2023-04-25T06:42:22.937Z",
      "orderPrice": 147,
      "priorityPrice": 29
    }
  } */