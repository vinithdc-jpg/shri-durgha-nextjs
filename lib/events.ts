export type EventCategory = "all" | "cultural" | "social" | "sports";

export type EventItem = {
  id: string;
  category: Exclude<EventCategory, "all">;
  image: string;
  alt: string;
  label: string;
  labelClass: string;
  date: string;
  title: string;
  shortDescription: string;
  description: string;
  gallery: string[];
};

export const eventsData: EventItem[] = [
  {
    id: "yakshagana-2025",
    category: "cultural",
    image:
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80",
    alt: "Yakshagana Event",
    label: "Cultural",
    labelClass: "bg-saffron-500",
    date: "Nov 12, 2025",
    title: "Grand Yakshagana Bayalata",
    shortDescription:
      "Over 1,000 villagers gathered to experience the mythical performance by renowned artists.",
    description:
      "Performed at Badoor Temple premises featuring top artists. The event saw overwhelming participation from surrounding villages, celebrating traditional folk theater. The intricate makeup, elaborate costumes, and mesmerizing dance movements kept the audience spellbound throughout the night.",
    gallery: [
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "blood-donation-2026",
    category: "social",
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=600&q=80",
    alt: "Blood Donation",
    label: "Social",
    labelClass: "bg-red-600",
    date: "Jan 26, 2026",
    title: "Mega Blood Donation Drive",
    shortDescription:
      "128 units of blood collected on Republic Day in association with Yenepoya Blood Bank.",
    description:
      "Organized on Republic Day. Over 128 voluntary donors participated. Certificate and refreshments were presented to all youth volunteers. This initiative greatly helped the local blood bank maintain their reserves for emergency medical situations.",
    gallery: [
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "kabaddi-tournament-2026",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=600&q=80",
    alt: "Sports Meet",
    label: "Sports",
    labelClass: "bg-blue-600",
    date: "Feb 15, 2026",
    title: "Badoor Rural Kabaddi Tournament",
    shortDescription:
      "16 regional teams competed in an exciting floodlight Kabaddi championship.",
    description:
      "An intense 1-day floodlight Kabaddi trophy that brought together rural talents. Cash prizes and trophies were handed over by local dignitaries. The event promoted physical fitness and sportsmanship among the youth of neighboring villages.",
    gallery: [
      "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518605368461-1e122b53b811?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "ganesha-utsava-2025",
    category: "cultural",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=600&q=80",
    alt: "Ganesha Utsava",
    label: "Cultural",
    labelClass: "bg-saffron-500",
    date: "Sep 07, 2025",
    title: "Public Ganesha Utsava Celebrations",
    shortDescription:
      "Three days of spiritual pujas, cultural bhajans, and community feast (Maha Annadana).",
    description:
      "Featuring daily Mahapooja, devotional bhajan sessions, children competitions, and traditional immersion procession. The community came together to celebrate with great devotion, culminating in a grand Visarjana procession with traditional music and dance.",
    gallery: [
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "scholarship-distribution-2025",
    category: "social",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&w=600&q=80",
    alt: "Scholarship Distribution",
    label: "Social",
    labelClass: "bg-emerald-600",
    date: "Jun 05, 2025",
    title: "School Kit & Scholarship Distribution",
    shortDescription:
      "Assisting over 75 deserving students from local government schools with bags and books.",
    description:
      "Shri Durgha Club members sponsored educational kits and financial aid for high school students in Badoor. Education is the foundation of a bright future, and our club is committed to ensuring that financial constraints do not hinder the learning journey of deserving children.",
    gallery: [
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "tree-planting-2025",
    category: "social",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    alt: "Plantation Drive",
    label: "Social",
    labelClass: "bg-teal-600",
    date: "Jul 10, 2025",
    title: "Vanamahotsava Tree Planting",
    shortDescription:
      "Planted over 200 fruit-bearing trees along public roadsides in Badoor.",
    description:
      "Youth volunteers came together to plant saplings and build protective guards to promote green environment in Badoor. We pledged to water and maintain these saplings throughout the year to ensure a greener, healthier environment for future generations.",
    gallery: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80"
    ],
  },
];
