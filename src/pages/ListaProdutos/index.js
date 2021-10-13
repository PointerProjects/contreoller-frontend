import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  TableContainer,
  Table, TableHead,
  TableRow, TableCell,
  TableBody,
  Paper,
  Button,
  Box,
  TextField,
} from '@material-ui/core';

import { Delete, Edit } from '@material-ui/icons';

import useStyles from './style';

import api from '../../services/api';

export default function ListaProdutos() {
  const classes = useStyles();
  const history = useHistory();

  const [produtos, setProdutos] = useState([]);
  const [idProduto, setIdProduto] = useState('');
  const [modal, setModal] = useState(false);
  const [nome, setNome] = useState('');
  const [vista, setVista] = useState('');
  const [prazo, setPrazo] = useState('');
  const [ncm, setNcm] = useState('');

  function telaCadastro() {
    history.push('/cadastro');
  }

  function telaInicial() {
    history.push('/');
  }

  function editar(id) {
    api.get(`/produto/${id}`).then((response) => {
      setIdProduto(response.data.id);
      setNome(response.data.nome);
      setVista(response.data.vista);
      setPrazo(response.data.prazo);
      setNcm(response.data.ncm);
    });

    setModal(true);
  }

  function confirmaEditar(id) {
    api.put(`/produto/${id}`, {
      nome,
      vista,
      prazo,
      ncm,
    }).then((response) => {
      alert('Produto atualizado com sucesso!');

      setModal(false);
    })
      .catch(() => {
        alert('Não foi possível editar o Produto!');
      });
  }

  function excluir(id) {
    api.delete(`/produto/${id}`).then((response) => {});
  }

  function cancelar() {
    setModal(false);
  }

  useEffect(() => {
    api.get('/produto').then((response) => {
      setProdutos(response.data);
    });
  }, [excluir]);

  return (
    <Container className={classes.container}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Valor à Vista</TableCell>
              <TableCell align="center">Valor à Prazo</TableCell>
              <TableCell align="center">NCM</TableCell>
              <TableCell align="center" />
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((item) => (
              <TableRow
                key={item.nome}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="center">{item.nome}</TableCell>
                <TableCell align="center">{item.vista}</TableCell>
                <TableCell align="center">{item.prazo}</TableCell>
                <TableCell align="center">{item.ncm}</TableCell>
                <TableCell>
                  <Box className={classes.icons}>
                    <Box onClick={(e) => { editar(item.id); }} className={classes.icon}>
                      <Edit style={{ fontSize: 20 }} />
                    </Box>
                    <Box onClick={(e) => { excluir(item.id); }} className={classes.icon}>
                      <Delete style={{ fontSize: 20 }} />
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box className={classes.buttons}>
        <Button className={classes.button} onClick={telaCadastro}>Cadastrar</Button>
        <Button className={classes.buttonList} onClick={telaInicial}>Tela Inicial</Button>
      </Box>

      {modal ? (
        <Box className={classes.form}>
          <TextField className={classes.input} value={nome} onChange={(e) => { setNome(e.target.value); }} id="outlined-basic" label="Nome" variant="outlined" />
          <TextField className={classes.input} value={vista} onChange={(e) => { setVista(e.target.value); }} id="outlined-basic" label="Valor à vista" variant="outlined" />
          <TextField className={classes.input} value={prazo} onChange={(e) => { setPrazo(e.target.value); }} id="outlined-basic" label="Volor à Prazo" variant="outlined" />
          <TextField className={classes.input} value={ncm} onChange={(e) => { setNcm(e.target.value); }} id="outlined-basic" label="NCM" variant="outlined" />
          <Box className={classes.buttonsModal}>
            <Button
              className={classes.buttonModal}
              onClick={(e) => confirmaEditar(idProduto)}
            >
              Confirmar
            </Button>
            <Button className={classes.buttonCancelar} onClick={cancelar}>Cancelar</Button>
          </Box>
        </Box>
      ) : null}

    </Container>
  );
}
