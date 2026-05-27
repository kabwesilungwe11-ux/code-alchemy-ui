import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: "Branding" | "UI/UX" | "Web Design" | "Photography";
  image: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "lumina-branding",
    title: "Lumina Brand Identity",
    category: "Branding",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-branding-1-877a3e99-1779909806236.webp",
    description: "A complete visual identity overhaul for a sustainable candle manufacturer focusing on minimalist aesthetics.",
    challenge: "The client needed a fresh look that communicated both luxury and eco-friendliness without being generic.",
    solution: "We developed a palette of earthy pastels and a custom serif logotype that feels both modern and timeless.",
    result: "Increased brand recognition by 40% and a 25% growth in premium wholesale accounts.",
    tags: ["Branding", "Minimalism", "Sustainable"],
    gallery: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-branding-1-877a3e99-1779909806236.webp",
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-branding-2-cc9481b2-1779909806032.webp"
    ]
  },
  {
    id: "zenith-app",
    title: "Zenith Meditation App",
    category: "UI/UX",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-ui-1-4d858233-1779909806099.webp",
    description: "Designing a calming and intuitive user experience for a next-generation mindfulness platform.",
    challenge: "Traditional meditation apps felt cluttered. Users wanted a 'breath of fresh air' when opening the app.",
    solution: "Simplified the navigation to a single tap and used glassmorphism to create a sense of depth and tranquility.",
    result: "Achieved a 4.9-star rating on the App Store within the first month of launch.",
    tags: ["UI/UX", "Mobile", "Glassmorphism"],
    gallery: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-ui-1-4d858233-1779909806099.webp",
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-ui-2-49d5d400-1779909806138.webp"
    ]
  },
  {
    id: "vogue-mag",
    title: "Vogue Digital Archive",
    category: "Web Design",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-web-1-3d031141-1779909806297.webp",
    description: "An elegant editorial website design for a high-fashion digital publication.",
    challenge: "Balancing high-resolution imagery with performance and complex typography layouts.",
    solution: "Used a modular grid system and custom variable fonts to create a dynamic reading experience.",
    result: "Average time on site increased by 3 minutes and ad viewability improved by 15%.",
    tags: ["Editorial", "Web Design", "Typography"],
    gallery: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-web-1-3d031141-1779909806297.webp",
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-web-2-3deeb251-1779909808961.webp"
    ]
  },
  {
    id: "urban-geometry",
    title: "Urban Geometry",
    category: "Photography",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-photo-1-8a1c1107-1779909805860.webp",
    description: "A series exploring the minimalist lines and abstract shapes found in modern urban architecture.",
    challenge: "Capturing the interplay of light and shadow in a way that feels intentional and artistic.",
    solution: "Focused on high-contrast black and white photography to emphasize structural form over color.",
    result: "Exhibited at the Modern Art Museum's digital gallery showcase.",
    tags: ["Photography", "Architecture", "Minimalism"],
    gallery: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-photo-1-8a1c1107-1779909805860.webp"
    ]
  },
  {
    id: "aurum-packaging",
    title: "Aurum Luxury Packaging",
    category: "Branding",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-branding-2-cc9481b2-1779909806032.webp",
    description: "Premium packaging design for a limited edition fragrance line.",
    challenge: "Creating a tactile luxury feel through visual design alone for online showcases.",
    solution: "Used 3D rendering and realistic textures to simulate gold foil and high-quality materials.",
    result: "Product sold out within 48 hours of the digital pre-launch.",
    tags: ["Packaging", "Luxury", "3D"],
    gallery: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-branding-2-cc9481b2-1779909806032.webp"
    ]
  },
  {
    id: "pulse-dashboard",
    title: "Pulse SaaS Dashboard",
    category: "UI/UX",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-ui-2-49d5d400-1779909806138.webp",
    description: "A data-rich dashboard for real-time analytics with a focus on accessibility.",
    challenge: "Presenting complex datasets without overwhelming the user.",
    solution: "Implemented a customizable widget system and a robust dark mode for prolonged usage.",
    result: "User onboarding time reduced by 30% according to beta tester feedback.",
    tags: ["Dashboard", "SaaS", "Accessibility"],
    gallery: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/project-ui-2-49d5d400-1779909806138.webp"
    ]
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Lumina Candles",
    text: "Working with this team was a game-changer. They didn't just design a logo; they understood our soul and translated it into a visual language.",
    avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/avatar-1-8fdd6bdc-1779909809368.webp"
  },
  {
    name: "Michael Chen",
    role: "Product Lead, Zenith",
    text: "The UI/UX expertise provided was exceptional. Our app's engagement increased significantly thanks to the intuitive design and smooth transitions.",
    avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/avatar-2-69dcf69d-1779909809994.webp"
  },
  {
    name: "David Miller",
    role: "Founder, Urban Gear",
    text: "The attention to detail in our branding was beyond expectations. Every element felt intentional and perfectly aligned with our vision.",
    avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/avatar-3-eceaadec-1779911366256.webp"
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director, Muse",
    text: "A true partner in innovation. They brought our abstract ideas to life with a sophistication that is rare in today's fast-paced market.",
    avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/bf498f65-8bcc-4351-acba-58928b723208/avatar-4-14f7e4e3-1779911366458.webp"
  }
];

export const awards = [
  { year: "2024", title: "Awwwards Site of the Day", category: "Web Design" },
  { year: "2023", title: "Behance Featured Portfolio", category: "UI/UX" },
  { year: "2022", title: "Red Dot Design Award", category: "Branding" },
  { year: "2021", title: "FWA of the Month", category: "Web Design" }
];

export const skills = [
  { name: "Brand Identity", icon: Trophy },
  { name: "UI/UX Design", icon: Briefcase },
  { name: "Web Development", icon: GraduationCap },
  { name: "Art Direction", icon: Award }
];