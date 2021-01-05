import React from 'react';
import { useFormikContext } from 'formik';
import Button from '../AppButton';

const SubmitButton = ({ title }) => {
    const { handleSubmit } = useFormikContext();
    return (
        <>
            <Button 
                title={title}
                onPress={handleSubmit} 
            />
        </>
    )
}


export default SubmitButton;