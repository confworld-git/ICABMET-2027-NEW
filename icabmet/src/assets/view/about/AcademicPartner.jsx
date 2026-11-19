import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../commonhero/common-hero";
import Enquiry from "../contact-us/Enquiry";
import {
  Tag,
  Presentation,
  Mic,
  Briefcase,
  Search,
  Users,
  BookOpen,
  Globe,
  Globe2,
  FileText,
  Image,
  Share2,
  Megaphone,
  CheckCircle2,
  Mail,
  Phone,
  Building,
  GraduationCap,
  Award,
} from "lucide-react";

const AcademicPartner = () => {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
    AOS.refresh();
  }, []);

  const benefits = [
    {
      icon: Tag,
      title: "Registration Discounts",
      description:
        "Special registration fee waivers and discounted packages for faculty, research scholars, and students.",
      tag: "Discount",
    },
    {
      icon: Presentation,
      title: "Research Presentation",
      description:
        "Priority presentation slots for oral and poster research presentations during live sessions.",
      tag: "Presentation",
    },
    {
      icon: Mic,
      title: "Keynote Opportunities",
      description:
        "Invitations for senior institution faculty to serve as Keynote Speakers or Guest Honor.",
      tag: "Keynote",
    },
    {
      icon: Briefcase,
      title: "Session Chairing",
      description:
        "Opportunities for professors and HODs to preside over technical and scientific session tracks.",
      tag: "Chair",
    },
    {
      icon: Search,
      title: "Reviewer Panels",
      description:
        "Inclusion of institutional experts into the international scientific peer-review board.",
      tag: "Review",
    },
    {
      icon: Users,
      title: "Committee Membership",
      description:
        "Institutional representation on the Conference Advisory & Organizing Committees.",
      tag: "Committee",
    },
    {
      icon: BookOpen,
      title: "SCOPUS Publication Pathways",
      description:
        "Accelerated editorial processing for papers published in SCOPUS & WoS indexed journals.",
      tag: "Publication",
    },
    {
      icon: Globe,
      title: "Academic Networking",
      description:
        "Global collaborative research initiatives and Memorandum of Understanding (MoU) frameworks.",
      tag: "Networking",
    },
  ];

  const promotionChannels = [
    {
      icon: <Globe2 className="w-5 h-5 text-rose-700" />,
      text: "Official Conference Website (Partner Logo Showcase)",
    },
    {
      icon: <FileText className="w-5 h-5 text-rose-700" />,
      text: "Digital Flyers & Official Conference Announcements",
    },
    {
      icon: <Image className="w-5 h-5 text-rose-700" />,
      text: "Conference Posters & Physical / Virtual Banners",
    },
    {
      icon: <Share2 className="w-5 h-5 text-rose-700" />,
      text: "Social Media Campaigns across Global Academic Networks",
    },
    {
      icon: <Megaphone className="w-5 h-5 text-rose-700" />,
      text: "Direct Email Marketing & Press Release Features",
    },
    {
      icon: <Building className="w-5 h-5 text-rose-700" />,
      text: "On-site Branding at Physical Venue & Session Backdrops",
    },
  ];

  const idealPartners = [
    "Universities & Degree Awarding Colleges",
    "Research Institutes & Laboratories",
    "Engineering & Business Schools",
    "Academic Departments & Centers of Excellence",
    "International Educational Alliances",
  ];

  const teamContacts = [
    {
      name: "Ms. Suhana S",
      role: "Academic Partnership Lead",
      phone: "+91 8610656424",
      email: "collaboration@confworld.org",
      accent: "rose",
    },
    {
      name: "Ms. Aishwarya S",
      role: "Conference Support Manager",
      phone: "+91 8072381719",
      email: "icabmet.cerada@gmail.com",
      accent: "orange",
    },
    {
      name: "Ms. Malathy G",
      role: "Global Outreach Coordinator",
      phone: "+91 6383055014",
      email: "icabmet.cerada@gmail.com",
      accent: "rose",
    },
  ];

  return (
    <div className="bg-white">
      {/* ── Hero Banner ── */}
      <Hero
        title="Academic Partner"
        breadcrumbs={[{ label: "Home", href: "/" }]}
        backgroundImage="/images/commonheroimages/1.webp"
      />

      {/* ── Intro Section ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 min-h-[28vh] flex flex-col items-center justify-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            Institutional Collaboration Program
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 text-center md:whitespace-nowrap">
            Become an Official{" "}
            <span className="text-rose-700">Academic Partner</span>
          </h1>
        </div>

        {/* ── 8 Key Benefits Grid ── */}
        <div className="mb-12">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900">
              Key Partnership <span className="text-rose-700">Benefits</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Exclusive advantages designed for collaborating institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-rose-600 transition-all duration-300 group flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center group-hover:bg-rose-700 transition-colors duration-300">
                        <IconComp className="w-6 h-6 text-rose-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Promotion & Criteria Section ── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column: Brand Promotion */}
          <div
            className="bg-rose-50/50 border-2 border-rose-100 rounded-3xl p-8"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-700 text-white flex items-center justify-center font-bold">
                <Megaphone size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Brand & Visibility Promotion
                </h3>
                <p className="text-xs text-rose-700 font-semibold">
                  How we feature your institution globally
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Academic partners receive prominent logo placement and brand
              publicity across all official international conference media
              channels:
            </p>
            <div className="space-y-3">
              {promotionChannels.map((chan, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-rose-100/80 shadow-xs"
                >
                  <div className="p-1.5 bg-rose-50 rounded-lg shrink-0">
                    {chan.icon}
                  </div>
                  <span className="text-gray-800 text-xs font-semibold">
                    {chan.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Eligibility Criteria */}
          <div
            className="bg-white border-2 border-orange-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
            data-aos="fade-left"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Partnership Criteria
                  </h3>
                  <p className="text-xs text-orange-600 font-semibold">
                    Requirement & Eligibility
                  </p>
                </div>
              </div>

              {/* Requirement Pill */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl mb-6">
                <h4 className="text-orange-900 font-bold text-sm mb-1">
                  Minimum Registration Requirement
                </h4>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Institutions must guarantee a minimum of{" "}
                  <strong>5 to 10 author/delegates registrations</strong>{" "}
                  (faculty or research students) to finalize the Academic
                  Partnership MoU.
                </p>
              </div>

              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                Ideal Partner Institutions
              </h4>
              <div className="space-y-2">
                {idealPartners.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-gray-700 text-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">
                Ready to collaborate?
              </span>
              <button
                onClick={() => setPopup(true)}
                className="bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md"
              >
                Apply as Academic Partner
              </button>
            </div>
          </div>
        </div>

        {/* ── Partner Banner CTA ── */}
        <div
          className="relative bg-gradient-to-r from-rose-800 via-rose-700 to-orange-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden mb-12"
          data-aos="zoom-in"
        >
          <div className="relative z-10 max-w-3xl">
            <span className="bg-white/20 text-white text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full border border-white/30 mb-4 inline-block">
              Institutional MoU & Partnership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Transform Your Institution’s International Research Footprint
            </h2>
            <p className="text-rose-100 text-sm md:text-base leading-relaxed mb-8">
              Join hands with Confworld Educational Research and Development
              Association (CERADA). Submit your inquiry today and our
              partnership team will assist with the MoU process.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setPopup(true)}
                className="bg-white text-rose-700 hover:bg-rose-50 text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Ask Enquiries
              </button>
              <a
                href="mailto:collaboration@confworld.org"
                className="bg-orange-500/80 hover:bg-orange-500 border border-white/30 text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2"
              >
                <Mail size={16} />
                collaboration@confworld.org
              </a>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute right-1/4 -top-12 w-48 h-48 bg-orange-400/20 rounded-full blur-xl pointer-events-none"></div>
        </div>

        {/* ── Partnership Team Contacts ── */}
        <div>
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900">
              Partnership <span className="text-rose-700">Team Contacts</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Get in touch directly with our program coordinators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamContacts.map((contact, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-rose-400 transition-all"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold mb-4">
                  <Users size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {contact.name}
                </h3>
                <p className="text-xs text-rose-700 font-semibold mb-4">
                  {contact.role}
                </p>

                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2.5 text-xs text-gray-700 hover:text-rose-700 font-medium"
                  >
                    <Phone size={14} className="text-rose-600" />
                    <span>{contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2.5 text-xs text-gray-700 hover:text-rose-700 font-medium break-all"
                  >
                    <Mail size={14} className="text-orange-500 shrink-0" />
                    <span>{contact.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Enquiry Modal */}
      {popup && <Enquiry setPopup={setPopup} />}
    </div>
  );
};

export default AcademicPartner;
