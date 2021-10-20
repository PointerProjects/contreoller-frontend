import React from 'react';

import {
  GoPerson,
  GoCalendar,
  GoFile,
  GoGear,
  GoGlobe,
  GoInfo,
  GoOrganization,
  GoGraph,
  GoCreditCard,
  GoHome,
  GoBriefcase,
  GoDeviceDesktop
} from "react-icons/go";


export const SidebarData = [
  {
    title: 'Página Inicial',
    path: '/',
    icon: <GoDeviceDesktop />,
    cName: 'nav-text'
  },
  {
    title: 'Clientes',
    path: '/clientes',
    icon: <GoPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Imóveis',
    path: '/imoveis',
    icon: <GoHome />,
    cName: 'nav-text',
  },
  {
    title: 'Aluguéis',
    path: '/alugueis',
    icon: <GoCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'Financeiro',
    path: '/financeiro',
    icon: <GoGraph />,
    cName: 'nav-text'
  },
  
  {
    title: 'Relatórios',
    path: '/relatorios',
    icon: <GoFile />,
    cName: 'nav-text'
  },
  {
    title: 'Cidades',
    path: '/cidades',
    icon: <GoGlobe />,
    cName: 'nav-text'
  },
  {
    title: 'Funcionários',
    path: '/funcionarios',
    icon: <GoOrganization />,
    cName: 'nav-text'
  },
  {
    title: 'Forncedores',
    path: '/fornecedores',
    icon: <GoBriefcase />,
    cName: 'nav-text'
  },
  {
    title: 'Bancos',
    path: '/bancos',
    icon: <GoCreditCard />,
    cName: 'nav-text'
  },
  {
    title: 'Gerais',
    path: '/gerais',
    icon: <GoGear />,
    cName: 'nav-text'
  },
  {
    title: 'Sobre',
    path: '/sobre',
    icon: <GoInfo />,
    cName: 'nav-text'
  }
];
