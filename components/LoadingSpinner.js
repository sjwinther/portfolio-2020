import { motion } from 'framer-motion'

const LoadingSpinner = ({ style, className }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    style={style}
    className={className}
  >
    <motion.path
      initial={false}
      animate={{
        pathLength: [0.125, 0.25, 0.5, 0.25, 0.125],
        rotate: ['90deg', '45deg', '0deg', '-180deg', '-270deg'],
      }}
      transition={{
        loop: Infinity,
        type: 'spring',
        duration: 0.9,
      }}
      style={{ scaleX: '-1' }}
      fill="none"
      stroke="#000"
      stroke-linejoin="round"
      stroke-width="2"
      d="M7.779176,23.821009 C10.823341,36.392622 30.062201,34.980264 31.779505,21.467279 C33.283305,9.634303 20.410836,6.258383 14.284125,8.767327 C8.157414,11.276271 6.370225,17.386632 7.779176,23.821009 Z"
    />
  </motion.svg>
)
export default LoadingSpinner
