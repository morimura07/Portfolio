import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Github,
  MessageSquare,
  Send as TelegramIcon,
} from "lucide-react";

import type { NavItem, SocialLink } from "@/types";

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/skills", label: "Skills", icon: Code },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/Enthusiastic001122",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://discord.gg/yW4aYSdR",
    icon: MessageSquare,
    label: "Discord",
  },
  {
    href: "https://t.me/GreenOsmi",
    icon: TelegramIcon,
    label: "Telegram",
  },
];
