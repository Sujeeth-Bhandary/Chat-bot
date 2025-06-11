import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Logo from './Shared/Logo';
import { useAuth } from '../context/AuthContext';
import Navigation from './Shared/navigation';

function Header() {
  const auth = useAuth();

  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: "none", position: "static" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        <div style={{ display: "flex", gap: "10px" }}>
          {auth?.isLoggedIn ? (
            <> 
              <Navigation 
                bg='#00fffc'
                to='/chat'
                text='Go to Chat'
                textColor='black'
              />
              <Navigation
                bg='#51538f'
                to='/'
                text='Logout'
                textColor='white'
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <Navigation 
                bg='#00fffc'
                to='/login'
                text='Login'
                textColor='black'
              />
              <Navigation
                bg='#51538f'
                to='/signup'
                text='Sign Up'
                textColor='white'
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
