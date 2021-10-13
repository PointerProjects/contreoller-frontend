import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    paddingTop: '5rem',
  },

  icons: {
    width: '3rem',
    display: 'flex',
    justifyContent: 'space-between',
  },

  icon: {
    cursor: 'pointer',
  },

  buttons: {
    textAlign: 'center',
  },

  button: {
    backgroundColor: 'green',
    margin: '1rem',
  },

  buttonList: {
    backgroundColor: 'blue',
    margin: '1rem',
  },

  form: {
    width: '25rem',
    height: '34rem',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '0.3rem',
    boxShadow: '1px 1px 5px 0px #999',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  input: {
    width: '80%',
    marginTop: '2rem',
  },

  buttonsModal: {
    width: '7rem',
    margin: '0 auto',
  },

  buttonModal: {
    marginTop: '2rem',
    width: '7rem',
    backgroundColor: 'green',
  },

  buttonCancelar: {
    marginTop: '2rem',
    width: '7rem',
    backgroundColor: '#ccc',
  },
});

export default useStyles;
