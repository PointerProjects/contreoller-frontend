import React, { useContext } from "react";

import { 
  GoHome,
  GoPlusSmall,
} from 'react-icons/go';

import { ImFilter } from "react-icons/im";

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';


import styles from "./styles.module.scss";

export function Imovel() {
  const { sideBar } = useContext(MenuContext);

  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <div className={styles.flex}>
          <div className={styles.title}>
            <GoHome color="#B4B4B4" size={24} />
            <p>Imóvel</p>
          </div>
          <button>
            <GoPlusSmall size={30} />
            <p>Novo</p>
          </button>
        </div>

        <div className={styles.filtro}>
          <div className={styles.title}>
            <ImFilter />
            <p>Filtro</p>
          </div>
          <div className={styles.flexFiltro}>
            <div>
              <p>Tipo</p>
              <input />
            </div>
            <div>
              <p>Disponibilidade</p>
              <div className={styles.flexCheckbox}>
                <div className={styles.flex}>
                  <input type="checkbox" />
                  <p>Venda</p>
                </div>
                <div className={styles.flex}>
                  <input type="checkbox" />
                  <p>Aluguel</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.flexFiltro}>
            <div>
              <p>Cidade</p>
              <input />
            </div>
            <div>
              <p>Bairro</p>
              <input />
            </div>
          </div>
          <div className={styles.flexFiltro}>
            <div>
              <p>Valores</p>
              <div className={styles.input}>
                <input placeholder="Valor mínimo" />
                <input placeholder="Valor máximo" />
              </div>
            </div>
            <div className={styles.flexButtons}>
              <button className={styles.buttonClean}>Limpar</button>
              <button className={styles.buttonFiltrar}>Filtrar</button>
            </div>
          </div>

          <div className={styles.imoveis}>
            <div className={styles.item}>
              <div className={styles.imagem} />
              <div className={styles.descricao}>
                <p>Código <span>000001</span></p>
                <p className={styles.bold}>Rua XV de Novembro, 527</p>
                <p>São Lourenço do Sul - RS</p>
                <div>
                  <p className={styles.text}>Dormitórios (3)</p>
                  <p className={styles.text}>Banheiros (2)</p>
                </div>
              </div>
              <div>
                <p>Venda</p>
                <p className={styles.bold}>R$ 350.000,00</p>
              </div>
            </div>
            <div className={styles.line} />
            <div className={styles.item}>
              <div className={styles.imagem} />
              <div className={styles.descricao}>
                <p>Código <span>000124</span></p>
                <p className={styles.bold}>Rua Humaitá, 200</p>
                <p>São Lourenço do Sul - RS</p>
                <div>
                  <p className={styles.text}>Dormitórios (2)</p>
                  <p className={styles.text}>Banheiros (1)</p>
                </div>
              </div>
              <div>
                <p>Venda</p>
                <p className={styles.bold}>R$ 270.000,00</p>
              </div>
            </div>
            <div className={styles.line} />
            <div className={styles.item}>
              <div className={styles.imagem} />
              <div className={styles.descricao}>
                <p>Código <span>000784</span></p>
                <p className={styles.bold}>Rua Almirante Barroso, 1477</p>
                <p>São Lourenço do Sul - RS</p>
                <div>
                  <p className={styles.text}>Dormitórios (3)</p>
                  <p className={styles.text}>Banheiros (1)</p>
                </div>
              </div>
              <div>
                <p>Venda</p>
                <p className={styles.bold}>R$ 125.000,00</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className={styles.incompatible}>
        <p>Sistema não compatível com seu dispositivo...</p>
      </div>
    </div>
  );
}
