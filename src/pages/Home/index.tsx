import { useContext, useState } from "react";
import { NavBar } from "../../components/NavBar";

import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

export function Home() {
  const { sideBar } = useContext(MenuContext);

  const [selected, setSelected] = useState(true);

  function handleSwitchButton() {
    setSelected(true);
  }

  function handleSwitchButtonClient() {
    setSelected(false);
  }

  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <div className={styles.lastAccess}>
          <h3>Últimos acessos</h3>
          <div className={styles.buttonsAcess}>
            <button className={selected ? styles.buttonSelected : styles.button} onClick={handleSwitchButton}>Imóveis</button>
            <button className={selected ? styles.button : styles.buttonSelected} onClick={handleSwitchButtonClient}>Clientes</button>
          </div>

          {selected ? 
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
          </table> 

        :
          
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

        <div className={styles.notices}>
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
