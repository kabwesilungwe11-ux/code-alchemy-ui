import { motion } from "framer-motion";
import MasonryGallery from "@/components/MasonryGallery";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 bg-muted text-primary text-xs font-black uppercase tracking-[0.3em] rounded-full mb-6">
              Available for Projects
            </span>
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 text-balance">
              BOLD <span className="italic font-serif text-primary">IDEAS</span> <br />
              REAL IMPACT<span className="text-primary">.</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
          >
            Independent designer & art director crafting digital products, brands, and experiences that resonate.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent mb-4" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground animate-bounce">
              Explore Work
            </span>
          </motion.div>
        </div>
      </section>

      <div id="work">
        <MasonryGallery />
      </div>
      <Awards />
      <Testimonials />
    </motion.div>
  );
};

export default Home;