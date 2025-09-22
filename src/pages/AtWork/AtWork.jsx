import React, { useMemo, useState } from "react";
import { Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {
  emmanueldr,
  emmanueldr2,
  emmanueldr3,
  emmanueldr4,
  uscongressman,
  uscongressman1,
} from "../../constant/image";
import { Helmet } from "react-helmet-async";

// ---------- Sample Data ----------
const PEOPLE = [
  {
    id: 1,
    name: "Emmanuel Ezeh",
    role: "Policy Analyst",
    department: "Energy",
    region: "Lobbying Congress at Capitol Hill, Washington D.C.",
    location: "Lagos, Nigeria",
    tags: ["Energy", "Climate"],
    img: emmanueldr,
  },
  {
    id: 2,
    name: "Jasper Li",
    role: "Public Affairs Lead",
    department: "Trade",
    region: "U.S. Congress in Session",
    location: "Singapore",
    tags: ["Trade", "APAC"],
    img: uscongressman1,
  },
  {
    id: 4,
    name: "David Johnson",
    role: "Senior Lobbyist",
    department: "Finance",
    region: "U.S. Congress, Class of 2025",
    location: "Washington, D.C.",
    tags: ["Finance", "Policy"],
    img: uscongressman,
  },
  {
    id: 5,
    name: "María Fernanda",
    role: "Regulatory Affairs",
    department: "Technology",
    region: "Lobby Session at the U.S. Congress",
    location: "Mexico City, Mexico",
    tags: ["Tech", "Regulation"],
    img: emmanueldr4,
  },
  {
    id: 7,
    name: "Aisha Khan",
    role: "Advocacy Specialist",
    department: "Education",
    region: "Director of Intergovernmental Relations at Office",
    location: "Dubai, UAE",
    tags: ["Education", "Youth"],
    img: emmanueldr2,
  },
  {
    id: 8,
    name: "Liam O'Connor",
    role: "Stakeholder Manager",
    department: "Agriculture",
    region: "Intergovernmental Relations Director",
    location: "Dublin, Ireland",
    tags: ["Agriculture", "Food"],
    img: emmanueldr3,
  },
];

// ---------- Components ----------
const PersonCard = ({ person, onOpen }) => (
  <motion.button
    onClick={() => onOpen(person)}
    layout
    whileHover={{ y: -4 }}
    className="group relative w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200"
  >
    <div className="relative aspect-[4/5] w-full overflow-hidden">
      <img
        src={person.img}
        alt={`${person.name}, ${person.role} in ${person.department}`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-left">
        <div className="mb-1 flex items-center gap-2 text-xs text-white/80">
          <Globe2 className="h-4 w-4" />
          <span className="font-extrabold">{person.region}</span>
        </div>
      </div>
    </div>
  </motion.button>
);

export default function AtWork() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    return PEOPLE.filter((p) =>
      [p.name, p.role, p.location, p.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name));
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Helmet SEO */}
      <Helmet>
        <title>
          At Work — Global South Lobby Group USA | Lobbying, Advocacy & Policy
        </title>
        <meta
          name="description"
          content="Meet the people driving Global South Lobby Group USA's advocacy. Our lobbyists, policy analysts, and specialists work across regions and sectors to influence U.S. and global policy."
        />
        <meta
          name="keywords"
          content="Global South, Lobbying, Advocacy, Policy, Washington D.C., International Relations, Diaspora"
        />
        <meta name="author" content="Global South Lobby Group USA" />
        <link rel="canonical" href="https://gslgusa.org/atwork" />

        {/* Open Graph */}
        <meta property="og:title" content="At Work — Global South Lobby Group USA" />
        <meta
          property="og:description"
          content="Discover our people — lobbyists, analysts, and advocates representing the Global South in U.S. policy."
        />
        <meta property="og:image" content="https://gslgusa.org/og-atwork.jpg" />
        <meta property="og:url" content="https://gslgusa.org/atwork" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="At Work — Global South Lobby Group USA" />
        <meta
          name="twitter:description"
          content="Meet the lobbyists, policy experts, and advocates working with Global South Lobby Group USA."
        />
        <meta name="twitter:image" content="https://gslgusa.org/og-atwork.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative">
        <Header />
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-gray-900/90 px-3 py-1 text-xs font-medium tracking-wide text-white shadow-sm">
                <Globe2 className="h-3.5 w-3.5" /> Global South Lobby Group USA
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                At Work — Our People
              </h1>
              <p className="mt-3 max-w-2xl text-gray-600">
                Meet the dedicated professionals behind our lobbying and
                advocacy work. our team builds bridges between the Global South
                and U.S. policymakers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="sr-only">Global South Lobby Group Team Directory</h2>
        {filtered.length === 0 ? (
          <div className="flex items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center text-gray-600">
            No matches. Try adjusting filters.
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {filtered.map((p) => (
              <PersonCard key={p.id} person={p} onOpen={setActive} />
            ))}
          </motion.div>
        )}
      </section>

      {/* Schema.org Structured Data for People */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: PEOPLE.map((p, i) => ({
            "@type": "Person",
            position: i + 1,
            name: p.name,
            jobTitle: p.role,
            worksFor: {
              "@type": "Organization",
              name: "Global South Lobby Group USA",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: p.location,
            },
            knowsAbout: p.tags,
          })),
        })}
      </script>

      {/* Footer */}
      <Footer />
    </div>
  );
}
