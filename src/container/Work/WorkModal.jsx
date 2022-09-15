import { motion } from "framer-motion";
import Backdrop from "./BackDrop";

const dropIn = {
  hidden: {
    y: "200vh",
    opacity: 0,
  },
  visible: {
    y: "190vh",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "200vh",
    opacity: 0,
  },
};

const WorkModal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p> Entonces aqui puedo editar el modal</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default WorkModal;
