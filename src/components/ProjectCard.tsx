import { motion } from "framer-motion";
import { Project } from "@/data/portfolio-data";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="break-inside-avoid group relative overflow-hidden rounded-3xl bg-card"
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
          />
        </div>
        
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center pointer-events-none">
          <span className="text-primary-foreground/70 text-xs font-black uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {project.category}
          </span>
          <h3 className="text-primary-foreground text-3xl font-black tracking-tighter mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
            {project.title}
          </h3>
          <div className="w-12 h-12 rounded-full bg-primary-foreground text-primary flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
            <ArrowUpRight size={24} />
          </div>
        </div>

        <div className="mt-4 px-2 md:hidden">
          <p className="text-primary text-[10px] font-black uppercase tracking-widest">{project.category}</p>
          <h3 className="text-xl font-black tracking-tighter">{project.title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;