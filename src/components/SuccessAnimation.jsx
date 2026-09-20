import { motion, AnimatePresence } from "framer-motion";

export const SuccessAnimation = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-card p-8 rounded-2xl shadow-xl flex flex-col items-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Animated Checkmark */}
            <motion.div
              className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              ✓
            </motion.div>

            <h2 className="mt-4 text-xl font-semibold">
              Message Sent!
            </h2>

            <p className="text-muted-foreground text-sm mt-1 text-center">
              Thanks! I’ll get back to you soon.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};