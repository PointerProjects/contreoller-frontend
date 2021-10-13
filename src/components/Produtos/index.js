import React from 'react';

import { Container, Typography } from '@material-ui/core';

import useStyles from './style';

export default function Produtos() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.text}>Código</Typography>
      <Typography className={classes.text}>Produto</Typography>
      <Typography className={classes.text}>Valor à vista</Typography>
      <Typography className={classes.text}>Valor à prazo</Typography>
      <Typography className={classes.text}>NCM</Typography>
    </Container>
  );
}
