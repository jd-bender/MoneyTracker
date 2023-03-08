import { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from './Alert';

const Toast = (props: any) => {
    const [alertOpen, setAlertOpen] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);

    useEffect(() => {
        setAlertOpen(props.alertOpen);
    }, [props.alertOpen]);

    useEffect(() => {
        setIsSuccessful(props.isSuccessful);
    }, [props.isSuccessful]);

    return (
        <Snackbar
            open={alertOpen}
            autoHideDuration={6000}
            onClose={props.handleAlertClose}
        >
            {isSuccessful ? (
                <Alert
                    onClose={props.handleAlertClose}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    {props.successMessage}
                </Alert>
            ) : (
                <Alert
                    onClose={props.handleAlertClose}
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    {props.errorMessage || 'Something went wrong'}
                </Alert>
            )}
        </Snackbar>
    );
};

export default Toast;
