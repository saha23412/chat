import React from 'react'
import { motion } from 'framer-motion';
import { Container } from '@mui/material';

type Props = {
    children: JSX.Element
}

const MotionLayout: React.FC<Props> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, display: 'block' }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, display: 'none' }}
        >
            <Container>
                {children}
            </Container>
        </motion.div>
    )
}

export default MotionLayout