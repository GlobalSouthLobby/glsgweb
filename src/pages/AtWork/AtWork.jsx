import React, { useMemo, useState } from "react";
import { Search, MapPin, Globe2, X, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { arrow, lobbyfirm, lobbyist, washingtonmap, firstdc, seconddc, dome1, dome2, emmanueldr, emmanueldr2, uscongressman, uscongressman1, emmanueldr3, emmanueldr4 } from '../../constant/image'
import { useNavigate } from 'react-router-dom'
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';


// ---------- Sample Data ----------
const PEOPLE = [
    {
        id: 1,
        name: "",
        role: "Policy Analyst",
        department: "Energy",
        region: "At work- Lobbying Congress at Capitol Hill Washington DC, USA",
        location: "Lagos, Nigeria",
        tags: ["Energy", "Climate"],
        img: emmanueldr,
    },
    {
        id: 2,
        name: "Jasper Li",
        role: "Public Affairs Lead",
        department: "Trade",
        region: "U.S. Congress in Session",
        location: "Singapore",
        tags: ["Trade", "APAC"],
        img: uscongressman1
    },
    // {
    //     id: 3,
    //     name: "Sofia Rossi",
    //     role: "Government Relations Manager",
    //     department: "Health",
    //     region: "Europe",
    //     location: "Rome, Italy",
    //     tags: ["Health", "EU"],
    //     img: emmanueldr2
    // },
    {
        id: 4,
        name: "David Johnson",
        role: "Senior Lobbyist",
        department: "Finance",
        region: "U.S. Congress, Class of 2025.",
        location: "Washington, D.C.",
        tags: ["Finance", "Policy"],
        img: uscongressman,
    },
    {
        id: 5,
        name: "María Fernanda",
        role: "Regulatory Affairs",
        department: "Technology",
        region: "Mr Emmanuel Ezeh arriving for a Lobby Session at the U.S Congress",
        location: "Mexico City, Mexico",
        tags: ["Tech", "Regulation"],
        img: emmanueldr4
    },
    
    {
        id: 7,
        name: "Aisha Khan",
        role: "Advocacy Specialist",
        department: "Education",
        region: "Mr. Emmanuel Ezeh Director- Inter GovernmentalRelations, at the office.",
        location: "Dubai, UAE",
        tags: ["Education", "Youth"],
        img: emmanueldr2
    },
    {
        id: 8,
        name: "Liam O'Connor",
        role: "Stakeholder Manager",
        department: "Agriculture",
        region: "Mr. Emmanuel Ezeh - Inter Governmental Relations Director ",
        location: "Dublin, Ireland",
        tags: ["Agri", "Food"],
        img: emmanueldr3
    },

];

const REGIONS = ["All Regions", "Africa", "Asia Pacific", "Europe", "Latin America", "Middle East", "North America"];
const DEPARTMENTS = ["All Departments", "Agriculture", "Communications", "Defense", "Education", "Energy", "Finance", "Health", "Legal", "Technology", "Transport", "Trade"];

// ---------- Utilities ----------
const classNames = (...c) => c.filter(Boolean).join(" ");

// ---------- Components ----------
const PersonCard = ({ person, onOpen }) => {
    return (
        <motion.button
            onClick={() => onOpen(person)}
            layout
            whileHover={{ y: -4 }}
            className="group relative w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200"
        >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                    src={person.img}
                    alt={person.name}
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
};

const Modal = ({ open, onClose, person }) => {
    return (
        <AnimatePresence>
            {open && person && (
                <motion.div
                    className="fixed inset-0 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        className="absolute inset-x-4 top-10 mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                    >
                        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
                            <div className="relative h-72 md:h-full">
                                <img
                                    src={person.img}
                                    alt={person.name}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="mb-4 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-900">{person.name}</h2>
                                        <p className="text-gray-600">{person.role}</p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100"
                                        aria-label="Close"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
                                    <MapPin className="h-4 w-4" />
                                    <span>{person.location}</span>
                                </div>
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {person.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    {person.name} is part of our global lobby network working on {person.department.toLowerCase()} policy. They collaborate across regions to drive positive, evidence-based outcomes with stakeholders and decision makers.
                                </p>
                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
                                    >
                                        View Profile
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
                                    >
                                        Connect
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function AtWork() {
    const [query, setQuery] = useState("");
    const [region, setRegion] = useState("All Regions");
    const [department, setDepartment] = useState("All Departments");
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);
    const [sortKey, setSortKey] = useState("name");

    const filtered = useMemo(() => {
        return PEOPLE.filter((p) => {
            const matchQuery = [p.name, p.role, p.location, p.tags.join(" ")]
                .join(" ")
                .toLowerCase()
                .includes(query.toLowerCase());
            const matchRegion = region === "All Regions" || p.region === region;
            const matchDept = department === "All Departments" || p.department === department;
            return matchQuery && matchRegion && matchDept;
        }).sort((a, b) => {
            if (sortKey === "name") return a.name.localeCompare(b.name);
            if (sortKey === "region") return a.region.localeCompare(b.region);
            if (sortKey === "department") return a.department.localeCompare(b.department);
            return 0;
        });
    }, [query, region, department, sortKey]);

    const handleOpen = (person) => {
        setActive(person);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setActive(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero / Header */}
            <section className="relative">
                <Header />
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_-5rem,rgba(20,20,20,0.06),transparent)]" />
                <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-20">
                    <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-gray-900/90 px-3 py-1 text-xs font-medium tracking-wide text-white shadow-sm">
                                <Globe2 className="h-3.5 w-3.5" /> Global South Lobby Group USA
                            </p>
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                                At Work — Our People
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
                {filtered.length === 0 ? (
                    <div className="flex items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center text-gray-600">
                        No matches. Try adjusting filters.
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 gap-5 sm:grid-cols-3"
                    >
                        {filtered.map((p) => (
                            <PersonCard key={p.id} person={p} onOpen={handleOpen} />
                        ))}
                    </motion.div>
                )}
            </section>

            {/* Modal */}
            {/* <Modal open={open} onClose={handleClose} person={active} /> */}

            {/* Footer blurb */}
            <Footer />
        </div>
    );
}
