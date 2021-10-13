import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Box,
} from '@material-ui/core';

import useStyles from './style';

import api from '../../services/api';

export default function ListaProdutos() {
  const classes = useStyles();
  const history = useHistory();

  const [produtos, setProdutos] = useState([]);

  function telaCadastro() {
    history.push('/cadastro');
  }

  function telaInicial() {
    history.push('/');
  }

  useEffect(() => {
    api.get('/produto').then((response) => {
      setProdutos(response.data);
    });
  }, []);

  return (
    <Container className={classes.container}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Valor à Vista</TableCell>
              <TableCell align="right">Valor à Prazo</TableCell>
              <TableCell align="right">NCM</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((item) => (
              <TableRow
                key={item.nome}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="right">{item.nome}</TableCell>
                <TableCell align="right">{item.vista}</TableCell>
                <TableCell align="right">{item.prazo}</TableCell>
                <TableCell align="right">{item.ncm}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box className={classes.buttons}>
        <Button className={classes.button} onClick={telaCadastro}>Cadastrar</Button>
        <Button className={classes.buttonList} onClick={telaInicial}>Tela Inicial</Button>
      </Box>

    </Container>
  );
}
