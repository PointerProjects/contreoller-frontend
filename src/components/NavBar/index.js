import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';

import { 
  GoGrabber,
  GoPerson,
  GoGraph,
  GoBriefcase,
  GoDeviceDesktop,
  GoFile,
  GoLock,
  GoInfo,
  GoSignOut
} from 'react-icons/go';

import { MenuContext } from '../../contexts/menu';

import perfilImg from '../../assets/perfil.jpg';

import styles from "./styles.module.scss";

export function NavBar() {
  const { showSidebar, sideBar } = useContext(MenuContext);
  const [cadastros, setCadastros] = useState(false);
  const [controle, setControle] = useState(false);
  const [financeiro, setFinanceiro] = useState(false);


  function activeCadastros() {
    setCadastros(!cadastros);
    setControle(false);
    setFinanceiro(false)
  }

  function activeControle() {
    setControle(!controle);
    setCadastros(false);
    setFinanceiro(false)
  }

  function activeFinanceiro() {
    setFinanceiro(!financeiro);
    setControle(false);
    setCadastros(false)
  }

  function desativarSubitens() {
    setCadastros(false);
    setControle(false);
    setFinanceiro(false);
  }

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
    <div className={styles.navBarBoxWrapper}>
      <div className={styles.menu}>
        <Link to='#' className={styles.menuBars} onClick={desativarSubitens}>
          <GoGrabber onClick={showSidebar} size={36} color={'#000'} />
        </Link>
        <h2 className={styles.title}>Pointer Imobiliária</h2>
      </div>

      <div className={styles.user}>
        <img src={perfilImg} alt="Imagem de Perfil" />
      </div>
    </div>

    <nav className={`${styles.navMenu} ${sideBar ? styles.active : ""}`}>
          <ul className={styles.navMenuItems}>
            {sideBar ? 
              <>
                <Link to="/">
                  <li className={styles.navText}>
                    <div className={styles.item}>
                      <div className={styles.iconMenu}>
                        <GoDeviceDesktop size={24} />
                      </div>
                      <span className={sideBar ? styles.spanMenu : styles.span}>Dashboard</span>                                   
                    </div>
                  </li>
                </Link>
                <li className={styles.navText} onClick={activeCadastros}>
                  <div className={styles.item}>
                    <div className={styles.iconMenu}>
                      <GoPerson size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Cadastros</span>     
                  </div>                              
                </li>
                {cadastros ? 
                  <ul className={styles.subitemCadastros}>
                    <Link to="/imovel">
                      <li>Imóveis</li>
                    </Link>
                    <li>Clientes</li>
                    <li>Tipo de Imóveis</li>
                    <li>Tipo de Clientes</li>
                    <li>Componentes</li>
                    <li>Móveis e Utensílios</li>
                    <li>Cidades</li>
                    <li>Bairros</li>
                    <li>Funcionários</li>
                    <li>Cargos</li>
                    <li>Profissões</li>
                    <li>Fornecedores</li>
                    <li>Bancos</li>
                    <li>Contas Bancárias</li>
                    <li>Vantagens</li>
                    <li>Destaques</li>
                    <li>Empresa</li>
                    <li>Foto cidade</li>
                    <li>Vídeos</li>
                  </ul>
                : null}  
                <li className={styles.navText} onClick={activeControle}>
                  <div className={styles.item}>
                    <div className={styles.iconMenu}>
                      <GoBriefcase size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Controle</span>                                   
                  </div>
                </li>
                {controle ? 
                  <ul className={styles.subitemCadastros}>
                    <li>Aluguéis</li>
                    <li>Propostas</li>
                    <li>Oportunidades</li>
                  </ul>
                : null} 
                <li className={styles.navText} onClick={activeFinanceiro}>
                  <div className={styles.item}>
                    <div className={styles.iconMenu}>
                      <GoGraph size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Financeiro</span>                                   
                  </div>
                </li>
                {financeiro ? 
                  <ul className={styles.subitemCadastros}>
                    <li>Caixa</li>
                    <li>Movimento Bancário</li>
                  </ul>
                : null} 
                <li className={styles.navText}>
                  <div className={styles.item}>
                    <div className={styles.iconMenu}>
                      <GoFile size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Relatórios</span>                                   
                  </div>
                </li>
                <li className={styles.navText}>
                  <div className={styles.item}>
                    <div className={styles.iconMenu}>
                      <GoLock size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Segurança</span>                                   
                  </div>
                </li>
                <li className={styles.navText}>
                  <div className={styles.item}>
                    <div className={styles.iconMenu}>
                      <GoInfo size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Sobre</span>                                   
                  </div>
                </li>
                <li className={styles.navText}>
                  <div className={styles.item}>
                    <div className={styles.iconMenu}>
                      <GoSignOut size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Sair</span>                                   
                  </div>
                </li>
              </>
            :
              <>
                <Link to="/">
                  <li className={styles.navText}>
                    <div className={styles.item}>
                      <div className={styles.icon}>
                        <GoDeviceDesktop size={24} />
                      </div>
                      <span className={sideBar ? styles.spanMenu : styles.span}>Dashboard</span>                                   
                    </div>
                  </li>
                </Link>
                <li className={styles.navText} onClick={showSidebar}>
                  <div className={styles.item} onClick={activeCadastros}>
                    <div className={styles.icon}>
                      <GoPerson size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Cadastros</span>                                   
                  </div>
                </li>
                <li className={styles.navText} onClick={showSidebar}>
                  <div className={styles.item} onClick={setControle}>
                    <div className={styles.icon}>
                      <GoBriefcase size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Controle</span>                                   
                  </div>
                </li>
                <li className={styles.navText} onClick={showSidebar}>
                  <div className={styles.item} onClick={setFinanceiro}>
                    <div className={styles.icon}>
                      <GoGraph size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Financeiro</span>                                   
                  </div>
                </li>
                <li className={styles.navText}>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <GoFile size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Relatórios</span>                                   
                  </div>
                </li>
                <li className={styles.navText}>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <GoLock size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Segurança</span>                                   
                  </div>
                </li>
                <li className={styles.navText}>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <GoInfo size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Sobre</span>                                   
                  </div>
                </li>
                <li className={styles.navText}>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <GoSignOut size={24} />
                    </div>
                    <span className={sideBar ? styles.spanMenu : styles.span}>Sair</span>                                   
                  </div>
                </li>
              </>
            }
          </ul>
        </nav>
    </IconContext.Provider>
  );
}
