import React from 'react';

import {
  FcBusinessman,
  FcHome, 
  FcGlobe,
  FcManager,
  FcShipped,
  FcSafe,
  FcInfo, 
  FcRules, 
  FcSupport,
  FcOvertime, 
  FcImport, 
  FcCurrencyExchange 
} from "react-icons/fc";


export const SidebarData = [
  {
    title: 'Clientes',
    path: '/',
    icon: <FcBusinessman />,
    cName: 'nav-text'
  },
  {
    title: 'Imóveis',
    path: '/imoveis',
    icon: <FcHome />,
    cName: 'nav-text',
  },
  {
    title: 'Aluguéis',
    path: '/alugueis',
    icon: <FcOvertime />,
    cName: 'nav-text'
  },
  {
    title: 'Financeiro',
    path: '/financeiro',
    icon: <FcCurrencyExchange />,
    cName: 'nav-text'
  },
  
  {
    title: 'Relatórios',
    path: '/relatorios',
    icon: <FcRules />,
    cName: 'nav-text'
  },
  {
    title: 'Cidades',
    path: '/cidades',
    icon: <FcGlobe />,
    cName: 'nav-text'
  },
  {
    title: 'Funcionários',
    path: '/funcionarios',
    icon: <FcManager />,
    cName: 'nav-text'
  },
  {
    title: 'Forncedores',
    path: '/fornecedores',
    icon: <FcShipped />,
    cName: 'nav-text'
  },
  {
    title: 'Bancos',
    path: '/bancos',
    icon: <FcSafe />,
    cName: 'nav-text'
  },
  {
    title: 'Gerais',
    path: '/gerais',
    icon: <FcSupport />,
    cName: 'nav-text'
  },
  {
    title: 'Sobre',
    path: '/sobre',
    icon: <FcInfo />,
    cName: 'nav-text'
  },
  {
    title: 'Sair',
    path: '/login',
    icon: <FcImport />,
    cName: 'nav-text'
  }
];
