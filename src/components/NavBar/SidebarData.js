import React from 'react';

import { 
  FcBarChart, 
  FcBusinessContact, 
  FcInfo, 
  FcRules, 
  FcOvertime, 
  FcImport, 
  FcCurrencyExchange 
} from "react-icons/fc";


export const SidebarData = [
  {
    title: 'Cadastros Básicos',
    path: '/',
    icon: <FcBusinessContact />,
    cName: 'nav-text'
  },
  {
    title: 'Controle',
    path: '/controle',
    icon: <FcBarChart />,
    cName: 'nav-text'
  },
  {
    title: 'Financeiro',
    path: '/financeiro',
    icon: <FcCurrencyExchange />,
    cName: 'nav-text'
  },
  {
    title: 'Agendamentos',
    path: '/agendamentos',
    icon: <FcOvertime />,
    cName: 'nav-text'
  },
  {
    title: 'Relatórios',
    path: '/relatorios',
    icon: <FcRules />,
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
