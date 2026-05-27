import { awards } from "@/data/portfolio-data";
import { motion } from "framer-motion";

const Awards = () => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16">RECOGNITIONS</h2>
        <div className="space-y-0">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-border group hover:bg-background/50 transition-colors px-4 rounded-xl"
            >
              <div className="flex items-center space-x-8 mb-4 md:mb-0">
                <p className="text-sm font-black text-primary uppercase tracking-widest w-12">{award.year}</p>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">{award.title}</h3>
              </div>
              <p className="text-muted-foreground font-medium uppercase tracking-[0.2em] text-sm">{award.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;