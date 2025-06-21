import { motion } from 'framer-motion';

export default function SkillBar({ name, percentage, delay = 0 }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
      </div>
    </div>
  );
}
