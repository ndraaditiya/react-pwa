import { motion, AnimatePresence } from 'framer-motion'

const Motion = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Motion;