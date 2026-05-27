import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div>Project not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32"
    >
      <header className="relative h-[80vh] w-full overflow-hidden bg-muted">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/" className="inline-flex items-center text-primary font-black uppercase tracking-widest text-xs mb-6 hover:translate-x-[-4px] transition-transform">
                <ArrowLeft size={16} className="mr-2" /> Back to Studio
              </Link>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 uppercase">{project.title}</h1>
              <div className="flex flex-wrap gap-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-6 py-2 bg-foreground/5 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest border border-foreground/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 italic">The Vision</h2>
            <p className="text-xl md:text-3xl font-medium leading-tight text-muted-foreground text-balance">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">Category</h4>
              <p className="text-xl font-bold">{project.category}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">Year</h4>
              <p className="text-xl font-bold">2024</p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">Client</h4>
              <p className="text-xl font-bold">Confidential</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          <div className="p-8 bg-muted/30 rounded-3xl border border-border">
            <h3 className="text-xl font-black tracking-tight mb-4 uppercase">Challenge</h3>
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>
          <div className="p-8 bg-muted/30 rounded-3xl border border-border">
            <h3 className="text-xl font-black tracking-tight mb-4 uppercase">Process</h3>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
          <div className="p-8 bg-muted/30 rounded-3xl border border-border">
            <h3 className="text-xl font-black tracking-tight mb-4 uppercase">Results</h3>
            <p className="text-muted-foreground leading-relaxed">{project.result}</p>
          </div>
        </div>

        <div className="space-y-12">
          {project.gallery.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img src={img} alt={`${project.title} view ${idx}`} className="w-full h-auto" />
            </motion.div>
          ))}
        </div>

        <div className="mt-40 pt-20 border-t border-border">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground mb-8">Next Project</p>
          <button 
            onClick={() => navigate(`/project/${nextProject.id}`)}
            className="group block w-full text-center"
          >
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter group-hover:text-primary transition-colors duration-500 uppercase">
              {nextProject.title}
            </h2>
            <div className="flex justify-center mt-8">
              <div className="w-20 h-20 rounded-full border-2 border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <ArrowRight size={40} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;