import { motion } from "framer-motion";
import { skills } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/profile-portrait-5135bbab-1779909806448.webp"
                alt="Profile"
                className="rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 w-full"
              />
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-primary rounded-[3rem] z-0 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none">THINKING <br /><span className="text-primary italic">DIFFERENTLY.</span></h2>
            <p className="text-2xl text-muted-foreground mb-12 leading-tight font-medium">
              I'm Alex, a multi-disciplinary designer obsessed with the intersection of art and functionality. I believe that every pixel should serve a purpose.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-6 bg-muted/30 rounded-3xl border border-border hover:border-primary/50 transition-colors">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <skill.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black tracking-tight">{skill.name}</h4>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mt-1">Expertise</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg font-black tracking-tight group" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-3 group-hover:translate-y-1 transition-transform" size={24} />
                  Get Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg font-black tracking-tight" asChild>
                <a href="/contact">
                  Start Project <ArrowRight className="ml-3" size={24} />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;