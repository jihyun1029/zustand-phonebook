import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";

const ContactFrom = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <TextField
                id="name"
                label="이름"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                id="phone-number"
                label="전화번호"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button variant="contained" size="large">추가</Button>
        </Box>
    );
};

export default ContactFrom;