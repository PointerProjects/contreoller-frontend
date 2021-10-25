import React, { useContext } from "react";

import { 
  GoDeviceDesktop,
  GoCalendar,
  GoPlus,
  GoFile,
  GoHome,
} from 'react-icons/go';

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';


import styles from "./styles.module.scss";

export function Home() {
  const { sideBar } = useContext(MenuContext);

  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <div className={styles.title}>
          <GoDeviceDesktop color="#B4B4B4" size={24} />
          <p>Dashboard</p>
        </div>

        <div className={styles.agendaMuralTitles}>
          <div className={styles.subtitle}>
            <GoCalendar color="#B4B4B4" size={24} />
            <p>Agenda</p>
            <div>
              <GoPlus color="#555" size={20} />
            </div>
          </div>
          <div className={styles.subtitle}>
            <GoFile color="#B4B4B4" size={24} />
            <p>Mural</p>
            <div>
              <GoPlus color="#555" size={20} />
            </div>
          </div>
        </div>

        <div className={styles.agendaMural}>
          <div className={styles.agenda}>
            <div className={styles.container}>
              <h2>25/10 as 09:00 h</h2>
              <p>Contatar José da Silva</p>
              <p>Status: <span className={styles.concluida}>Realizado</span></p>
            </div>
            <div className={styles.line} />
            <div className={styles.container}>
              <h2>25/10 as 09:00 h</h2>
              <p>Ligar Paulo Morales</p>
              <p>Status: <span>Pendente</span></p>
            </div>
          </div>

          <div className={styles.agenda}>
            <div className={styles.container}>
              <div className={styles.mural}>
                <div>
                  <h2>Reunião</h2>
                  <p className={styles.description}>Hoje as 17:00 h para tratar de diversos assuntos</p>
                </div>
                <div className={styles.flex}>
                  <div className={styles.checkbox}>
                    <input type="checkbox" />
                    <p>Lido</p>
                  </div>
                  <p className={styles.name}>José de Souza</p>
                </div>
              </div>
            </div>
            <div className={styles.line} />
            <div className={styles.container}>
              <div className={styles.mural}>
                <div>
                  <h2>Festa Final de Ano</h2>
                  <p className={styles.description}>Nossa festa de final de ano ocorrerá dia 20/12 no Restaurante...</p>
                </div>
                <div className={styles.flex}>
                  <div className={styles.checkbox}>
                    <input type="checkbox" />
                    <p>Lido</p>
                  </div>
                  <p className={styles.name}>Pedro Dantas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.agendaMuralTitles}>
          <div className={styles.subtitleOne}>
            <div>
              <GoHome color="#B4B4B4" size={24} />
              <p>Imóveis - Últimos Acessados</p>
            </div>
            <GoPlus color="#555" size={20} />
          </div>
        </div>

        <div className={styles.agendaMural}>
          <div className={styles.ultimosAcessos}>
            <div className={styles.container}>
              <div className={styles.item}>
                <p className={styles.itemCod}>00001</p>
                <p className={styles.itemWrapper}>Rua XV de Novembo, 527</p>
                <p>São Lourenço do Sul</p>
              </div>
              <div className={styles.item}>
                <p className={styles.itemCod}>00124</p>
                <p className={styles.itemWrapper}>Rua Humaitá, 200</p>
                <p>São Lourenço do Sul</p>
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
