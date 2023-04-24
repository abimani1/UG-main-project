import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, IconButton,  TextField, Typography } from '@mui/material'
import{Link, useNavigate} from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useForm } from 'react-hook-form';
import { signin } from '../server/api';

const Signin = () => {
  // const[userD,setUserD]=useState();
  // const[user,setUser]=useState([])
  // const getData=()=>{
  //     const emails={email:email}
  //     getUsarD(emails)
  //     setUserD(getUsarData)
  //     console.log(userD);
  //   }
  const {register,handleSubmit}=useForm({
    // resolver:yupResolver(userSchema),
});

  const [expanded, setExpanded] = useState(false);
  const nav=useNavigate()
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const onSubmit=(data)=>{
    // let email=data.email
    signin(data).then((response)=>{
      if(response){
        localStorage.setItem('clientData',JSON.stringify(response.data))
        console.log(response.data.name);
        // console.log(userD.name);
      nav("/client/home")
      }
    }).catch((error)=>{
      console.log(error)
      alert('email or password')
    })
    // nav("/",{state:{email:email}})
  }
  
  return (
    <Container>
      <Box component={'div'} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'auto'}}>
        <Box component={'div'} sx={{boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',display:'flex',flexDirection:'column',rowGap:'30px',justifyContent:'center',width:'350px',padding:'20px',marginTop:'100px'}}>
          <Box component={'div'} >
            <Accordion
            expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
            >
              <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
                <Typography variant='h5' color={'primary'}>Login With Password</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box component={'div'} sx={{display:'flex',flexDirection:'column',rowGap:'20px'}}>
                    <TextField type={'email'} label='Email Or Phone Number' placeholder='Enter the Email or Phone number' {...register('email')} fullWidth required/>
                    <TextField type={'password'} label='Password' placeholder='Enter the Password' {...register('password')} fullWidth required/>
                    <Button type={'submit'} variant='contained'>Login</Button>
                  </Box>     
                </form>
              </AccordionDetails>
            </Accordion>  
          </Box>
          
          <Box component={'div'}>
            <Box component={'div'}>
            <Typography color={'gray'}  variant='body1'>create the MyQuote's Account <Link to={'/signup'} style={{textDecoration:'none',color:'#2196f3',fontWeight:'bold',cursor:'pointer'}}>SignUp</Link></Typography>
            </Box>
          </Box>


          <Box component={'div'} sx={{display:'flex',flexDirection:'column',rowGap:'10px'}}>
            {/* <Box component={'div'}>
              <Typography color={'primary'}  variant='h5' sx={{textAlign:'center',padding:'10px'}}><hr/>or<hr/></Typography>
            </Box> */}
            <Box component={'div'}>
              <Typography color={'gray'}  variant='body2'>Signin with Google,Facsbook or Twitter</Typography>
            </Box>
            <Box component={'div'}sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center', 
            columnGap:'20px',
            }}>
              <IconButton color="primary" >
                <GoogleIcon sx={{fontSize:'30px'}}/>
              </IconButton>

              <IconButton color="primary" >
                <FacebookIcon sx={{fontSize:'30px'}}/>
              </IconButton>
                                    
              <IconButton color="primary" > 
               <TwitterIcon sx={{fontSize:'30px'}}/>
              </IconButton>
            </Box>            
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Signin