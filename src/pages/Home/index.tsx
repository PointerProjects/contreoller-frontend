import React, { useContext } from "react";
import { NavBar } from "../../components/NavBar";

import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

export function Home() {
  const { sideBar } = useContext(MenuContext);

  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <div className={styles.lastsAccess}>
          <div className={styles.lastAccessProperty}>
            <p>Últimos imóveis acessados</p>
            <div className={styles.table}>
              <div className={styles.tableTitle}>
                <p className={styles.code}>Código</p>
                <p className={styles.name}>Nome do Cliente</p>
                <p className={styles.address}>Endereço</p>
              </div>
              <div className={styles.rows}>
                <p className={styles.code}>1257</p>
                <p className={styles.name}>Juliana Azevedo</p>
                <p className={styles.address}>Rua Mariz e Barros, nº 1515</p>
              </div>
              <div className={styles.rows}>
                <p className={styles.code}>1257</p>
                <p className={styles.name}>Juliana Azevedo</p>
                <p className={styles.address}>Rua Mariz e Barros, nº 1515</p>
              </div>
              <div className={styles.rows}>
                <p className={styles.code}>1257</p>
                <p className={styles.name}>Juliana Azevedo</p>
                <p className={styles.address}>Rua Mariz e Barros, nº 1515</p>
              </div>
              <div className={styles.rows}>
                <p className={styles.code}>1257</p>
                <p className={styles.name}>Juliana Azevedo</p>
                <p className={styles.address}>Rua Mariz e Barros, nº 1515</p>
              </div>
              <div className={styles.rows}>
                <p className={styles.code}>1257</p>
                <p className={styles.name}>Juliana Azevedo</p>
                <p className={styles.address}>Rua Mariz e Barros, nº 1515</p>
              </div>
            </div>
          </div>

          <div className={styles.lastAccessClients}>
            <p>Últimos clientes acessados</p>
            <div className={styles.table}>
              <div className={styles.tableTitle}>
                <p className={styles.code}>Código</p>
                <p className={styles.name}>Nome do Cliente</p>
                <p className={styles.address}>Endereço</p>
              </div>
              <div className={styles.rows}>
                <p className={styles.code}>1257</p>
                <p className={styles.name}>Juliana Azevedo</p>
                <p className={styles.address}>Rua Mariz e Barros, nº 1515</p>
              </div>
              <div className={styles.rows}>
                <p className={styles.code}>1257</p>
                <p className={styles.name}>Juliana Azevedo</p>
                <p className={styles.address}>Rua Mariz e Barros, nº 1515</p>
              </div>
              <div className={styles.rows}>
                <p className={styles.code}>1257</p>
                <p className={styles.name}>Juliana Azevedo</p>
                <p className={styles.address}>Rua Mariz e Barros, nº 1515</p>
              </div>
              <div className={styles.rows}>
                <p className={styles.code}>1257</p>
                <p className={styles.name}>Juliana Azevedo</p>
                <p className={styles.address}>Rua Mariz e Barros, nº 1515</p>
              </div>
              <div className={styles.rows}>
                <p className={styles.code}>1257</p>
                <p className={styles.name}>Juliana Azevedo</p>
                <p className={styles.address}>Rua Mariz e Barros, nº 1515</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.noticesMural}>
          <div className={styles.noticesContainer}>
            <p className={styles.text}>Avisos</p>
            <div className={styles.notices}>
              <div>
                <p>
                  Clientes de aniversário
                </p>
                <span>(2)</span>
              </div>
              <div>
                <p>Inquilinos que não pagaram</p>
                <span>(0)</span>
              </div>
              <div>
                <p>Seguros vencidos</p>
                <span>(0)</span>
              </div>
              <div>
                <p>Proprietário que não recebeu</p>
                <span>(0)</span>
              </div>
              <div>
                <p>
                  Contrato de aluguel em vencimento
                </p>
                <span>(5)</span>
              </div>
            </div>
          </div>

          <div className={styles.mural}>
            <p className={styles.text}>Mural</p>
            <ul>
              <li>
                Reunião (25/10/2021 às 15:20)
                <div className={styles.description}>
                  <p>Reunião para ajustes internos</p>
                  <p>25/10/2021 às 15:20</p>
                  <div>
                    <span>Quem deve participar:</span>
                    <p>Equipe de administração</p>
                  </div>
                  <div>
                    <span>Criada por:</span>
                    <p>Carlos Ribeiro</p>
                  </div>
                </div>
              </li>
              <li>
                Reunião semanal (28/10/2021 às 10:45)
                <div className={styles.description}>
                  <p>Reunião semanal para debater metas</p>
                  <p>(28/10/2021 às 10:45)</p>
                  <div>
                    <span>Quem deve participar:</span>
                    <p>Todos</p>
                  </div>
                  <div>
                    <span>Criada por:</span>
                    <p>Manoel Marques</p>
                  </div>
                </div>
              </li>
              <li>
                Reunião com cliente  (02/11/2021 às 14:50)
                <div className={styles.description}>
                  <p>Reunião com cliente para acertar venda de imóvel</p>
                  <p>(02/11/2021 às 14:50)</p>
                  <div>
                    <span>Quem deve participar:</span>
                    <p>Bruna Azevedo/Manoel Marques</p>
                  </div>
                  <div>
                    <span>Criada por:</span>
                    <p>Bruna Azevedo</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className={styles.incompatible}>
        <p>Sistema não compatível com seu dispositivo...</p>
      </div>
    </div>
  );
}
