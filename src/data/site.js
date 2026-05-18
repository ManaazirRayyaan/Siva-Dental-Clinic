import {
  Activity,
  BadgeCheck,
  Bone,
  Braces,
  CalendarDays,
  Clock,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";

export const clinic = {
  name: "Dental clinic 2",
  address: "xx,yy,xx.",
  phone: "+91XXXXXXXXXX",
  phoneHref: "tel:+91XXXXXXXXXX",
  whatsappHref: "https://wa.me/91XXXXXXXXXX",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Appointment", to: "/appointment" },
  { label: "Contact", to: "/contact" },
];

export const featuredServices = [
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement planned for natural look, strength, and confident function.",
    icon: SmilePlus,
  },
  {
    title: "Oral & Maxillofacial Surgery",
    description: "Specialist surgical care for complex dental, jaw, and facial concerns.",
    icon: Stethoscope,
  },
  {
    title: "Root Canal Treatment",
    description: "Precision endodontic care focused on saving natural teeth with comfort.",
    icon: Activity,
  },
  {
    title: "Fixed Braces & Aligners",
    description: "Modern orthodontic correction with clear planning and stable results.",
    icon: Braces,
  },
  {
    title: "Wisdom Tooth Removal",
    description: "Careful extraction protocols designed for minimal discomfort and safer healing.",
    icon: Bone,
  },
  {
    title: "Smile Correction",
    description: "Aesthetic improvements shaped around facial balance and lasting oral health.",
    icon: Sparkles,
  },
];

export const detailedServices = [
  {
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth with natural look and function.",
    icon: SmilePlus,
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Oral & Maxillofacial Surgery",
    description: "Advanced surgical procedures handled with precision and care.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Root Canal Treatment",
    description: "Painless procedures to save natural teeth.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Braces & Aligners",
    description: "Straighten your teeth with modern orthodontic solutions.",
    icon: Braces,
    image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Teeth Whitening",
    description: "Enhance your smile with safe whitening treatments.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Wisdom Tooth Removal",
    description: "Safe and efficient removal with minimal discomfort.",
    icon: Bone,
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=85",
  },
];

export const highlights = [
  { label: "Advanced Surgical Care", icon: Syringe },
  { label: "Modern Equipment", icon: BadgeCheck },
  { label: "Experienced Team", icon: Users },
];

export const trustPoints = [
  { title: "Advanced surgical expertise", icon: Stethoscope },
  { title: "Pain-minimized procedures", icon: HeartPulse },
  { title: "Sterile & hygienic environment", icon: ShieldCheck },
  { title: "Patient-first approach", icon: Users },
];

export const contactItems = [
  { label: clinic.address, icon: MapPin },
  { label: clinic.phone, icon: Phone },
  { label: "Mon - Sat: 9:30 AM - 8:00 PM", icon: Clock },
  { label: "Appointments available on request", icon: CalendarDays },
  { label: "WhatsApp consultation support", icon: MessageCircle },
];
