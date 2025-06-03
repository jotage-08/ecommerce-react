import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products') // agora sem o domínio completo
      .then(res => setProducts(res.data))
      .catch(err => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Produtos</h1>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h2>{product.name}</h2>
          <p><strong>Preço:</strong> R$ {product.price}</p>
          <p><strong>Descrição:</strong> {product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
