// import React from 'react';
// import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
// import Profile from '../Profile/Profile';
// import Mentors from '../Mentors/Mentors';
// import SignUp from '../SignUp/SignUp';
// import '../Profile/styles.css';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// function Main() {
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));
//   const classes = useStyles();
//   return (
//     <div>
//       <div className={classes.root}>
//         <AppBar position='static'>
//           <Toolbar>
//             <IconButton
//               edge='start'
//               className={classes.menuButton}
//               color='inherit'
//               aria-label='menu'
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant='h6' className={classes.title}>
//               <Link to='/'>IT MENTOR</Link>
//             </Typography>
//             <Button color='inherit'>
//               <Link to='/signup'>Sign Up</Link>
//             </Button>
//             <Button color='inherit'>
//               <Link to='/profile'>Profile</Link>
//             </Button>
//             <Button color='inherit'>
//               <Link to='/mentors'>All Mentors</Link>
//             </Button>
//           </Toolbar>
//         </AppBar>
//       </div>

//       <Switch>
//         <Route exact path='/'></Route>

//         <Route exact path='/profile'>
//           <Profile />
//         </Route>

//         <Route exact path='/mentors'>
//           <Mentors />
//         </Route>
//         <Route exact path='/signup'>
//           <SignUp />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default Main;
