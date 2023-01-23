import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const iconStyle = {
    color: isHover ? '#97AE0C' : '#C7E2D9',
  };

  return (
    <Stack
    direction="row"
    justifyContent="space-between"
    gap="30px"
    px="20px"
    pt="16px"
    pb="16px"
    alignItems= "center"
    style={{backgroundColor: "#021D15"}}
    >
      <Link to='/'>
        <img src={Logo} alt="logo" style={{width: '60px', height: '60px', margin: '0 20px'}}/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
      >
        <Link to='/' style={{textDecoration: 'none', color: '#C7E2D9'}}>Home</Link>
        <a href="/#exercises" style={{textDecoration: 'none', colo: '#C7E2D9'}}>Exercises</a>
      </Stack>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        pr="20px"
      >
        <Link to='/Favorites'>
        <StarsRoundedIcon 
        style={iconStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          fontSize: '40px'
          }}>
          </StarsRoundedIcon>
      </Link>
      </Stack>
    </Stack>
  )
}

export default Navbar