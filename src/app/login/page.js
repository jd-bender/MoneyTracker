import { Typography, TextField, Button } from '@mui/material';

export default function Login() {
    return (
        <span className='bg-white flex flex-col w-1/2 h-1/2 min-w-fit rounded-3xl justify-center place-items-center'>
            <Typography variant="h4" className="mb-4">Money Tracker</Typography>
            <span className="mb-4">
                <TextField label="Email" sx={{width: '20rem'}} variant="outlined" />
            </span>
            <span className="mb-4">
                <TextField label="Password" type="password" sx={{width: '20rem'}} variant="outlined" />
            </span>

            <Button variant="outlined">Login</Button>
        </span>
    );
};