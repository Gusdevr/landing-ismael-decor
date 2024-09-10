import React, { useEffect } from 'react';

const SucessoCompra = () => {
  useEffect(() => {
    // Snippet de evento de conversão
    window.gtag('event', 'conversion', {
      'send_to': 'AW-16541779826/Rm1rCN7isaoZEPKO3s89'
    });
  }, []); // Executa apenas quando a página é carregada

  return (
    <div>
      <h1>Agradecemos sua compra!</h1>
      <p>Seu pedido foi recebido com sucesso.</p>
    </div>
  );
};

export default SucessoCompra;
