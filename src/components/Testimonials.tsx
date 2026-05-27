import { testimonials } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Voice of Partners
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase text-balance"
          >
            THEIR <span className="italic font-serif text-primary">EXPERIENCE</span>
          </motion.h2>
          <div className="w-32 h-1 bg-primary mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass group p-10 md:p-14 rounded-[3rem] border border-border relative overflow-hidden hover:border-primary/50 transition-colors duration-500"
            >
              <Quote className="absolute -top-6 -right-6 text-primary/5 w-48 h-48 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-6 mb-10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-20 h-20 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl"
                  />
                  <div>
                    <h4 className="text-2xl font-black tracking-tight">{t.name}</h4>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>

                <p className="text-xl md:text-2xl font-medium italic text-foreground/90 leading-tight">
                  "{t.text}"
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;