import type { StaticImageData } from "next/image";
import chapel from "@/images/net-chapel.jpg";
import cinema from "@/images/cinema.jpg";
import coffee from "@/images/coffee.jpg";
import education from "@/images/education.jpg";
import gym from "@/images/gym.jpg";
import health from "@/images/health.jpg";
import logo from "@/images/logo.png";
import office from "@/images/office.jpg";
import restaurant from "@/images/restaurant.jpg";
import retail from "@/images/retail.jpg";
import worship from "@/images/worship.jpg";

export { logo };

export const screens: { name: string; playing: string; online: boolean; href: string; slug: string }[] = [
  { name: "Lobby", playing: "Menu", online: true, href: "/solution/hospitality", slug: "hospitality" },
  { name: "Cafe", playing: "Lunch", online: true, href: "/solution/hospitality", slug: "hospitality" },
  { name: "Shop floor", playing: "Offer", online: true, href: "/solution/retail", slug: "retail" },
  { name: "Ward 2", playing: "No signal", online: false, href: "/solution/healthcare", slug: "healthcare" },
  { name: "Gym", playing: "Classes", online: true, href: "/solution/gyms", slug: "gyms" },
  { name: "Campus", playing: "Notice", online: true, href: "/solution/education", slug: "education" },
  { name: "Office", playing: "Town hall", online: true, href: "/solution/corporate", slug: "corporate" },
  { name: "Chapel", playing: "Service", online: true, href: "/solution/worship", slug: "worship" },
];

export const venues: {
  slug: string;
  className: string;
  image: StaticImageData;
  title: string;
  text: string;
  alt: string;
  href: string;
}[] = [
  {
    slug: "retail",
    className: "v-retail",
    image: retail,
    title: "Retail",
    text: "Influence purchase decisions at the point of sale",
    alt: "Sportswear shop floor with clothing racks and a mannequin",
    href: "/solution/retail",
  },
  {
    slug: "hospitality",
    className: "v-restaurants",
    image: restaurant,
    title: "Hospitality",
    text: "Digital menu management, made easy",
    alt: "Restaurant dining room with tables set in white linen and glassware",
    href: "/solution/hospitality",
  },
  {
    slug: "corporate",
    className: "v-corporate",
    image: office,
    title: "Corporate offices",
    text: "Reach decision-makers in professional environments",
    alt: "Bright open office with desks along a wall of windows",
    href: "/solution/corporate",
  },
  {
    slug: "healthcare",
    className: "v-health",
    image: health,
    title: "Healthcare and hospitals",
    text: "Engage patients and visitors with care",
    alt: "Hospital reception with an information desk and digital kiosks",
    href: "/solution/healthcare",
  },
  {
    slug: "education",
    className: "v-edu",
    image: education,
    title: "Education institutions",
    text: "Inspire students and faculty on campus",
    alt: "Contemporary campus building under a clear sky",
    href: "/solution/education",
  },
  {
    slug: "gyms",
    className: "v-gym",
    image: gym,
    title: "Gyms and fitness",
    text: "Motivate members and display class schedules",
    alt: "Evening gym floor with benches and training stations",
    href: "/solution/gyms",
  },
  {
    slug: "worship",
    className: "v-worship",
    image: worship,
    title: "Places of worship",
    text: "Engage your congregation with digital notice boards",
    alt: "Chapel interior with timber arches and coloured light",
    href: "/solution/worship",
  },
];

export const hero = { coffee, restaurant, office, worship, retail, health, gym, education, chapel, cinema };
