import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { CheckCircleRounded } from '@material-ui/icons';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
    const top = 50 + window;
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  },
  avatar: {
    margin: 10,
    fontSize: 30,
  },
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    // marginBottom :20
  },
  paper1: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
  successIcon: {
      color: "green",
      fontSize: '70px'
  }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    
    React.useEffect(() => {
        loadCSS(
        'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
        document.querySelector('#font-awesome-css'),
        );
    }, []);

    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [name, setName] = React.useState('');


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submit = (event) => {
        event.preventDefault()
        // debugger;
        // event.target
        console.log('something', event.target.name.value);
        setSuccess(true);
        setName(event.target.name.value);
    }

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar} color={"inherit"}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>Logo</Typography>
                    <Icon
                        className={clsx(classes.iconHover, 'fa fa-plus-circle')}
                        color="error"
                        style={{ fontSize: 30 }}
                        onClick={handleOpen}
                    />
                    <h4>Add Courses</h4> 
                    <Avatar className={classes.avatar}></Avatar>
                </Toolbar>
            </AppBar>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper1}>
                    <Container component="main" maxWidth="xs">
                        {
                            success ?  
                                (
                                    <div className={classes.paper}>
                                         <CheckCircleRounded className={classes.successIcon} />
                                         <h2>Success</h2>
                                         <h4>Thanks {name} for submitting</h4>
                                         <Button
                                            // type="submit"
                                            fullWidth
                                            variant="contained"
                                            className={classes.submit}
                                            onClick={handleClose}
                                        >
                                            Close
                                    </Button>
                                    </div>
                                ) : (
                            <div className={classes.paper}>
                                <Typography component="h1" variant="h5">
                                    Add a new course
                                </Typography>
                                <form  onSubmit={submit} className={classes.form} noValidate>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        // required
                                        fullWidth
                                        id="email"
                                        label="Enter your course name"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        // required
                                        fullWidth
                                        name="name"
                                        label="Enter your name"
                                        type="text"
                                        id="name"
                                        // autoComplete="current-password"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        // onClick={submit}
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        className={classes.submit}
                                    >
                                        Cancel
                                    </Button>
                                </form>
                            </div>)
                        }
                    </Container>
                </div>
            </Modal>
        </div>
    )
}