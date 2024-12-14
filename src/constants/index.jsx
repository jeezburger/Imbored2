import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/deb.jpg";
import user2 from "../assets/profile-pictures/akhil.jpg";
import user3 from "../assets/profile-pictures/couple.jpg";
import user4 from "../assets/profile-pictures/Risith.jpg";
import user5 from "../assets/profile-pictures/suhu.jpg";
import user6 from "../assets/profile-pictures/veer.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Ayushmaan Deb",
    company: "Upcoming cancer patient",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Akhil Y.",
    company: "Upcoming Junkie",
    image: user2,
    text: "I had like twice, but I feel like it was always part of me, I owe the team my life and my hair",
  },
  {
    user: "Rachit and Chakrabooty",
    company: "Well Known drunk power-couple",
    image: user3,
    text: "Working with this company was a pleasure. Their hiding spots are top notch.Always said I dont want it but I'm usually high the very next hour,I love my s/o",
  },
  {
    user: "Risith Pai",
    company: "Akhil BF",
    image: user4,
    text: "Never Had it but my Boyfriend said its good ,as I trust him with my life I assume its good",
  },
  {
    user: "Suhuruth Vippagunta",
    company: "Upcoming Twink/PocketPussy",
    image: user5,
    text: "I had this and I was out like a light,I have been just randomly spitting random shit which no sober or high person could even fathom to understand",
  },
  {
    user: "Veer Aryan",
    company: "Thambi Media team head",
    image: user6,
    text: "Lil too good ,I have this more than the times I drink water,Infact when my friends say enough I say the amount of golis I havent had is far greater than the amount I've had",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Power",
    price: "40Rs",
    features: [
      "Cheap ",
      "gets the job done",
      "Takes you from A to B while being in A",
      "Discrete Packaging",
    ],
  },
  {
    title: "Rajashree",
    price: "60Rs",
    features: [
      "Mid Range Maal",
      "Pleasant Feeling and Good duration",
      "Just better than Power",
      "Golden Packaging",
    ],
  },
  {
    title: "Anand Munaka",
    price: "80rs",
    features: [
      "Best In market",
      "Your limit is the maal's limit",
      "Low and Steady high but takes you to new heights",
      "No Cover Just raw Performance",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
