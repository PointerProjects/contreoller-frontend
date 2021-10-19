import React, { useState } from 'react';

import NavBar from '../../components/NavBar';


import './style.css';

function PaginaInicial() {
  const [buttonselected, setButtonSelected] = useState(false);

  function buttomImoveis() {
    setButtonSelected(false)
  }

  function buttomClientes() {
    setButtonSelected(true)
  }

  return (
    <div className='container'>
      <NavBar />
      <div className="main">
        <div className="historico">
          <h3>Últimos acessos</h3>
          <div className='buttons'>
            <button className={buttonselected ? 'button' : 'button-selected'} onClick={buttomImoveis}>Imóveis</button>
            <button className={buttonselected ? 'button-selected' : 'button'} onClick={buttomClientes}>Clientes</button>
          </div>

          {buttonselected ? 
          <table>
            <tr>
              <th>Código</th>
              <th>Cliente</th>
              <th>Endereço</th>
            </tr>
            <tr>
              <td>1925</td>
              <td>Marcos Antunes</td>
              <td>Rua Getúlio Vargas, nº 1478</td>
            </tr>
            <tr>
              <td>2578</td>
              <td>Juliana Azevedo</td>
              <td>Rua Senador Pinheiro Machado, nº 785</td>
            </tr>
          </table> :
          
          <table>
            <tr>
              <th>Código</th>
              <th>Cliente</th>
              <th>Endereço</th>
            </tr>
            <tr>
              <td>525</td>
              <td>Carlos de Souza</td>
              <td>Rua Duque de Caxias, nº 258 </td>
            </tr>
            <tr>
              <td>123</td>
              <td>Maria Cardoso</td>
              <td>Rua General Argolo, nº 1258</td>
            </tr>
          </table>
          }
          
        </div>

        <div className="avisos">
          <h3>Avisos</h3>
          <button>
            <p>
              Clientes de aniversário
            </p>
            <span>(2)</span>
          </button>
          <button>Inquilinos que não pagaram</button>
          <button>Seguros vencidos</button>
          <button>Proprietário que não recebeu</button>
          <button>
            <p>
              Contrato de aluguel em vencimento
            </p>
            <span>(5)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaginaInicial;
