import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, Mail, MessageSquare, MapPin } from "lucide-react";

const Contact = () => {
  const [pending, setPending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setTimeout(() => {
      setPending(false);
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-none">LET'S <br /> CREATE <br /><span className="text-primary italic">MAGIC.</span></h1>
              <p className="text-2xl text-muted-foreground mb-16 leading-tight font-medium">
                I'm always looking for exciting new projects and creative partners. Reach out and let's make something unforgettable.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-muted/30 rounded-3xl border border-border">
                  <Mail className="text-primary mb-4" size={32} />
                  <p className="text-sm font-black text-muted-foreground uppercase tracking-widest mb-2">Email</p>
                  <p className="text-xl font-bold">hello@creative.studio</p>
                </div>
                <div className="p-8 bg-muted/30 rounded-3xl border border-border">
                  <MessageSquare className="text-primary mb-4" size={32} />
                  <p className="text-sm font-black text-muted-foreground uppercase tracking-widest mb-2">Social</p>
                  <p className="text-xl font-bold">@creative_studio</p>
                </div>
              </div>
            </div>

            <div className="glass p-10 md:p-16 rounded-[3rem] border border-border shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -m-10" />
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-black uppercase tracking-widest">Name</Label>
                  <Input id="name" placeholder="Who are you?" className="h-14 rounded-2xl bg-background/50" required />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-black uppercase tracking-widest">Email</Label>
                  <Input id="email" type="email" placeholder="Where can I reach you?" className="h-14 rounded-2xl bg-background/50" required />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-sm font-black uppercase tracking-widest">Project Details</Label>
                  <Textarea id="message" placeholder="Tell me everything..." className="min-h-[180px] rounded-2xl bg-background/50 pt-4" required />
                </div>
                <Button type="submit" className="w-full h-16 rounded-full text-lg font-black tracking-tight group" size="lg" disabled={pending}>
                  {pending ? "Sending Magic..." : (
                    <>
                      Send Message <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;