import{ Box, Button, IconButton, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import{Link} from 'react-router-dom';
// import { userSchema } from '../Validations/UserValidation';
// import * as yup from 'yup';
// import yupResolver from 'yup';
import {useForm} from "react-hook-form";
import axios from 'axios' 

const Signup = () => {
    const {register,handleSubmit}=useForm({
        // resolver:yupResolver(userSchema),
    });

    const onSubmit=(data)=>{
        
        axios.post('http://localhost:4000/api/user/signup',data).then((res)=>{
            console.log('succes');
        console.log(data);
    })
    }

  return (
    <Container>
        <Box component={'div'}>
            <Box component={'div'} sx={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:'10px'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box component={'div'}width='450px' sx={{boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',rowGap:'10px',padding:'10px'}}>
                        <Typography color={"primary"} gutterBottom variant='h4' sx={{fontWeight:'bold'}}>SignUp</Typography>
                        <Box sx={{display:'flex',flexDirection:'column',rowGap:'20px',width:'300px'}}>
                            <TextField type={'text'} label='Name' placeholder='Enter the Name'{...register("clientName")} fullWidth required />
                            <TextField type={'email'} label='Email' placeholder='Enter the email' {...register("email")} fullWidth required />
                            <TextField type={'tel'} label='Phone Number' placeholder='Enter the Phone number' {...register("phoneNumber")}fullWidth required />
                            <TextField type={'password'} label='Password' placeholder='Enter the Password' {...register("password")} fullWidth required />
                        </Box>
                        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',rowGap:'5px',width:'300px'}}>
                            <Button type={'submit'}  variant='contained' sx={{width:'200px'}}>SignUp</Button>
                        </Box>
                        <Box component={'div'} sx={{display:'flex',flexDirection:'column',rowGap:'20px'}}>
                            <Box component={'div'}>
                                <Typography color={'gray'}  variant='body1'>Signup with Google,Facsbook or Twitter</Typography>
                            </Box>
                            <Box component={'div'}sx={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                columnGap:'20px',
                                }}>
                   
                   
                                    <IconButton color='red' >
                                        <GoogleIcon sx={{fontSize:'30px'}}/>
                                    </IconButton>
                                    <IconButton color="primary" >
                                        <FacebookIcon sx={{fontSize:'30px'}}/>
                                    </IconButton>
                                    <IconButton color="primary" > 
                                        <TwitterIcon sx={{fontSize:'30px'}}/>
                                    </IconButton>
                            </Box>
                            <Box component={'div'}>
                                <Typography color={'gray'}  variant='body2'> Click here for <Link to="/signin" style={{textDecoration:'none',color:'#2196f3',fontWeight:'bold',fontSize:'16px'}}>SignIn</Link></Typography>
                            </Box>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    </Container>
  )
}

export default Signup