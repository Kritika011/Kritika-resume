import { motion } from "framer-motion";
import profilePic from "../image/dp.jpg";

export default function MYHeaders() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-6">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
          Kritika Parmanick
        </motion.h1>
        <p className="text-2xl mt-2">Full Stack Developer | AI Enthusiast</p>
      </motion.div>
      {/* <motion.img src={profilePic} alt="Profile" className="w-300px h-300px rounded-full object-cover" /> */}
      <motion.img src={profilePic}  alt="Profile"  style={{ width: "300px", height: "300px", borderRadius: "50%", objectFit: "cover" }}  />
    </div>
  );
}