import { motion } from 'framer-motion';

export default function SkillBar({ name, percentage, delay = 0 }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="skill-bar bg-white/20">
        <motion.div 
          className="skill-progress"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
        ></motion.div>
      </div>
    </div>
  );
}
