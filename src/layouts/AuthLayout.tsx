import whiteLogo from '../../src/assets/SEC_white_logo.png';
import rectangleShape1 from '../../src/assets/authLayout/circleShape.svg';
import { motion } from 'framer-motion'

const AuthLayout = ({ children }: any) => {
    return (
        <main className='flex items-center my-14 mx-12 overflow-hidden gap-[250px] w-[95%]'>
            <div className="h-[calc(100vh-120px)] rounded-[30px] relative w-[500px] bg-gradient-to-tr from-[rgba(45,85,150,0.93)] to-[rgba(34,72,134,1)] overflow-hidden">
                <img src={whiteLogo} alt="logo" className='absolute top-1/2 ' />
                <img src={rectangleShape1} alt="circle shape" className='top-[-40px] right-[-40px] absolute' />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className='flex items-center justify-center flex-1'>
                {children}
            </motion.div>
        </main>
    )
}

export default AuthLayout;