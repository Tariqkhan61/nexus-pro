export type Service = {
  id: number;
  category: string;
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  message: string;
  rating: number;
};

export const services: Service[] = [
  {
    id: 1,
    category: "web",
    title: "Web Development",
    description: "Modern, fast aur fully responsive websites with SEO optimization",
    icon: "Code",
  },
  {
    id: 2,
    category: "design",
    title: "Graphic Design",
    description: "Logos, branding, social media posts aur complete visual identity",
    icon: "Palette",
  },
  {
    id: 3,
    category: "marketing",
    title: "Digital Marketing",
    description: "SEO, Google Ads, Facebook Ads aur social media campaigns",
    icon: "Megaphone",
  },
  {
    id: 4,
    category: "web",
    title: "E-Commerce Solutions",
    description: "Online stores with payment integration aur product management",
    icon: "ShoppingCart",
  },
  {
    id: 5,
    category: "design",
    title: "UI/UX Design",
    description: "User-friendly interfaces jo convert karti hain aur delight deti hain",
    icon: "Layout",
  },
  {
    id: 6,
    category: "marketing",
    title: "Content Creation",
    description: "Blogs, videos aur engaging content aap ke audience ke liye",
    icon: "PenTool",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "CEO, TechSolutions",
    message:
      "Nexus-Pro ne hamari website 3x faster bana di. Team professional hai aur delivery on-time hoti hai. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sara Ali",
    role: "Founder, DesignHub",
    message:
      "Behtareen design sense aur attention to detail. Hamari brand identity completely transform ho gayi.",
    rating: 5,
  },
  {
    id: 3,
    name: "Bilal Ahmed",
    role: "Manager, RetailCo",
    message:
      "E-commerce store launch karne ke baad hamari sales double ho gayi hain. Great ROI!",
    rating: 5,
  },
  {
    id: 4,
    name: "Fatima Noor",
    role: "Director, EduSmart",
    message:
      "School ki website aur management system dono bana diya. Parents aur students sab khush hain.",
    rating: 5,
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },        // 👈 YEH LINE ADD KAREIN
  { href: "/contact", label: "Contact" },
];
// === OWNER INFO ===
export const owner = {
  name: "Muhammad Tariq Mahboob",
  shortName: "Muhammad Tariq",
  role: "Founder & Lead Developer",
  tagline: "Building Premium Digital Experiences",
  email: "hello@nexuspro.com",
  phone: "+92 300 1234567",
  location: "Lahore, Pakistan",
};
export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "why-your-business-needs-a-website",
    title: "Why Your Business Needs a Website in 2026",
    excerpt: "Aaj ke digital daur mein website sirf ek luxury nahi, balke business ki zaroorat hai. Janiye kyun.",
    content: "Aaj ke daur mein agar aap ka business online nahi hai, toh aap apne customers ko kho rahe hain. Ek professional website aap ki 24/7 salesperson hoti hai. Is blog mein hum detail se batayenge ke website kaise aap ke business ko grow karti hai...",
    date: "October 15, 2026",
    author: "Muhammad Tariq Mahboob",
    category: "Business",
  },
  {
    id: 2,
    slug: "top-5-web-design-trends",
    title: "Top 5 Web Design Trends to Watch Out For",
    excerpt: "Dark mode, glassmorphism aur AI-driven design. Janiye 2026 ke sabse popular web design trends.",
    content: "Web design har saal change hota hai. 2026 mein dark mode, smooth animations aur minimal layouts ka daur hai. Is blog mein hum top 5 trends par baat karenge jo aap ki website ko modern banayenge...",
    date: "October 10, 2026",
    author: "Muhammad Tariq Mahboob",
    category: "Design",
  },
  {
    id: 3,
    slug: "whatsapp-integration-for-business",
    title: "How WhatsApp Integration Can Boost Your Sales",
    excerpt: "Contact form se seedha WhatsApp par message. Janiye yeh feature aap ki sales kaise badha sakta hai.",
    content: "WhatsApp duniya ka sabse bada messaging app hai. Agar aap ke website se log seedha WhatsApp par message bhej sakein, toh aap ki response time bohot fast ho jati hai...",
    date: "October 5, 2026",
    author: "Muhammad Tariq Mahboob",
    category: "Marketing",
  },
];