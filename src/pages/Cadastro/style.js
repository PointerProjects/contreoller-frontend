import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2rem',
  },

  form: {
    backgroundColor: '#ccc',
    width: '25rem',
    height: '34rem',
    textAlign: 'center',
  },

  input: {
    width: '80%',
    marginTop: '2rem',
  },

  buttons: {
    width: '7rem',
    margin: '0 auto',
  },

  button: {
    marginTop: '2rem',
    width: '7rem',
    backgroundColor: 'green',
  },

  buttonBlue: {
    marginTop: '1rem',
    width: '7rem',
    backgroundColor: 'blue',
  },

  buttonYellow: {
    marginTop: '1rem',
    width: '7rem',
    backgroundColor: 'yellow',
  },
});

export default useStyles;
