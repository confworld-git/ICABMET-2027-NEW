import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ConferenceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const publications = [
    {
      type: "Research article • Restricted access",
      title:
        "Exploring the Interplay Between Parenting Style, Dark Triad, Cultural Capitaland Internet Addiction Disorders of College Students: A Cross-Cultural CBD Framework Analysis",
      authors:
        "Jing Qiaoqiao, Muzi Li, Chew Fong Peng, Chan Wai Yin and Rusdi Abd Rashid",
      presentedAt: "ICSTEET-2025",
      publication: "Applied Research in Quality of Life",
      quartile: "Q1",
      indexing: "Scopus, SSCI",
      publisher: "Springer",
      year: "2026",
      doi: "https://link.springer.com/article/10.1007/s11482-026-10592-9",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Women’s Economic Empowerment in Dhaka: Overcoming Gender-Based Challenges in Banking and Finance",
      authors: "Rumpa Neogi, Arnab Bhattacharjee, Tanushree Biswas",
      presentedAt: "WCMRP-2025",
      publication: "Human Arenas",
      quartile: "Q1",
      indexing: "Scopus, ESCI",
      publisher: "Springer",
      year: "2026",
      doi: "https://doi.org/10.1007/s42087-026-00573-7",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Beyond Fragmented Leadership Models: A Conceptual Integrated Theory of Leadership Effectiveness in a VUCA World",
      authors: "Millicent Lindiwe Ndaba, S. Sivakumar",
      presentedAt: "ICETMRS-2025",
      publication: "Human Arenas",
      quartile: "Q1",
      indexing: "Scopus, ESCI",
      publisher: "Springer",
      year: "2026",
      doi: "https://link.springer.com/article/10.1007/s42087-026-00615-0",
    },
    {
      type: "Research article • Restricted access",
      title:
        "From trend to strategic practices: a bibliometric analysis of knowledge management in communications and multimedia-related sectors",
      authors:
        "Aidawati Abd Rahman, Norasyikin Shaikh Ibrahim, Rohaizan Daud, Min Hui Leow",
      presentedAt: "WCMRP-2026",
      publication: "Quality & Quantity",
      quartile: "Q1",
      indexing: "Scopus",
      publisher: "Springer",
      year: "2026",
      doi: "https://link.springer.com/article/10.1007/s11135-026-02831-w",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Evaluating the influence of courseware on online learning pedagogy at Pangasinan State University.",
      authors: "Angelou O Ramos",
      publication: "E-Learning and Digital Media",
      quartile: "Q2",
      indexing: "Scopus, ESCI",
      publisher: "SAGE",
      year: "2025",
      doi: "https://journals.sagepub.com/doi/abs/10.1177/20427530251343208",
    },
    {
      type: "Research article • Restricted access",
      title:
        "The assessment SHIFT: Traditional and technology-driven approaches to listening comprehension.",
      authors: "Johnedel Barrota Peralta",
      publication: "E-Learning and Digital Media",
      quartile: "Q2",
      indexing: "Scopus, ESCI",
      publisher: "SAGE",
      year: "2025",
      doi: "https://journals.sagepub.com/doi/10.1177/20427530251348607",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Redefining educational success: Analyzing the impact of closed management systems on student well-being and academic performance in Chinese technical education.",
      authors: "Jingkun Liu, Rovena I Dellova and Zhengxin Yi",
      publication: "E-Learning and Digital Media",
      quartile: "Q2",
      indexing: "Scopus, ESCI",
      publisher: "SAGE",
      year: "2024",
      doi: "https://doi.org/10.1177/20427530241299032",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Mechanism of PI3K-AKT Signaling Pathway Mediating Apoptosis of Periodontal Tissue Cells in Chronic Periodontitis",
      authors:
        "Lan Dazhi, Pimporn Thongmuang, Sarisak Soontornchai, You Jianpeng",
      presentedAt: "WCMRP-2025",
      publication: "International Journal of Environmental Sciences",
      quartile: "Q4",
      indexing: "Scopus",
      publisher: "Elsevier",
      year: "2024",
      doi: "https://doi.org/10.64252/hp3vmy81",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Zeolite X from coal fly ash inhibits proliferation of human breast cancer cell lines (MCF-7) via induction of S phase arrest and apoptosis",
      authors: "S. Subhapriya and P. Gomathipriya",
      publication: "Molecular Biology Reports",
      quartile: "Q2",
      indexing: "Scopus, SCIE",
      publisher: "Springer",
      year: "2018",
      doi: "https://doi.org/10.1007/s11033-018-4363-9",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Induction of apoptotic effects of anti-proliferative zeolite X from coal fly ash on cervical cancer (HeLa) cell lines",
      authors: "S. Subhapriya and P. Gomathipriya",
      publication: "Molecular Biology Reports",
      quartile: "Q2",
      indexing: "Scopus, SCIE",
      publisher: "Springer",
      year: "2018",
      doi: "https://doi.org/10.1007/s11033-018-4363-9",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Green synthesis of titanium dioxide (TiO2) nanoparticles by Trigonella foenum-graecum extract and its antimicrobial properties",
      authors: "S. Subhapriya and P. Gomathipriya",
      publication: "Microbial Pathogenesis",
      quartile: "Q1",
      indexing: "Scopus, SCIE",
      publisher: "Elsevier",
      year: "2018",
      doi: "https://doi.org/10.1016/j.micpath.2018.01.027",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Surfactant-free bio-synthesised TiO2 nanorods from Turbinaria conoides – A study on photocatalytic and anti-bacterial activity",
      authors: "S. Subhapriya and P. Gomathipriya",
      publication: "Materials Research Express",
      quartile: "Q2",
      indexing: "Scopus, SCIE",
      publisher: "IOP",
      year: "2018",
      doi: "https://iopscience.iop.org/article/10.1088/2053-1591/aac3bc",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Synthesis and characterization of zeolite X from coal fly ash: a study on anticancer activity",
      authors: "S. Subhapriya and P. Gomathipriya",
      publication: "Materials Research Express",
      quartile: "Q2",
      indexing: "Scopus, SCIE",
      publisher: "IOP",
      year: "2018",
      doi: "https://iopscience.iop.org/article/10.1088/2053-1591/aad16c",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Design and analysis of high gain and low noise figure CMOS low noise amplifier for Q-band nano-sensor application",
      authors: "K Suganthi and S Malarvizhi",
      publication: "Materials Research Express",
      quartile: "Q2",
      indexing: "Scopus, SCIE",
      publisher: "IOP",
      year: "2018",
      doi: "https://iopscience.iop.org/article/10.1088/2053-1591/aaafea",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Detection and classification of cardiovascular abnormalities using FFT based multi-objective genetic algorithm",
      authors: "B. V. P Prasad and Velusamy Parthasarathy",
      publication: "Biotechnology & Biotechnological Equipment",
      quartile: "Q2",
      indexing: "Scopus, SCIE",
      publisher: "Taylor & Francis",
      year: "2017",
      doi: "https://doi.org/10.1080/13102818.2017.1389303",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === publications.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? publications.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-rose-100 flex flex-col items-center justify-center px-4 md:px-6 py-8">
      {/* Header */}
      <div className="w-full max-w-5xl mb-6 text-center">
        {/* Label bar */}
        <div className="flex items-center justify-center gap-0 mb-4">
          <div className="bg-rose-700 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5">
            Publications
          </div>
          <div className="bg-white text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 border border-gray-200">
            ICABMET · 2027
          </div>
        </div>

        <h1 className="text-xl md:text-2xl font-black text-gray-950 mb-3 leading-tight">
          Participate in ICABMET-2027 and Achieve{" "}
          <span className="text-rose-700">Scopus / SCIE</span> Indexed
          Publication
        </h1>

        {/* Divider */}
        <div className="flex gap-1 justify-center mb-4">
          <div className="h-1 w-12 bg-rose-700" />
          <div className="h-1 w-6 bg-rose-600" />
          <div className="h-1 w-3 bg-rose-300" />
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-4xl mx-auto">
          ICABMET-2027 offers a valuable opportunity for researchers to present
          their work and achieve publication in reputed Scopus / SCIE indexed
          journals.{" "}
          <strong className="text-gray-800">
            Selected high-quality papers
          </strong>{" "}
          presented at the conference will be recommended and processed for
          legitimate{" "}
          <strong className="text-gray-800">
            Scopus / SCIE indexed journal publication
          </strong>
          , ensuring global academic visibility and recognition.
        </p>
      </div>

      {/* Proof section heading */}
      <div className="max-w-5xl w-full mb-5 text-center">
        <h2 className="text-xl md:text-2xl font-black text-rose-700 mb-1">
          Proof of Scopus / SCIE Indexing
        </h2>
        <p className="text-sm text-gray-600">Publication Success Story</p>
      </div>

      {/* Carousel */}
      <div className="max-w-5xl w-full relative">
        {/* White card */}
        <div className="bg-white border border-gray-200 shadow-lg rounded-xl px-6 md:px-10 py-8 min-h-[220px] flex flex-col justify-between transition-all duration-500">
          <div>
            {/* Type badge */}
            <p className="text-rose-600 text-xs font-semibold uppercase tracking-wider mb-2">
              {publications[currentIndex].type}
            </p>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-rose-900 leading-snug mb-5">
              {publications[currentIndex].title}
            </h3>

            {/* Details List */}
            <div className="flex flex-col space-y-1.5 text-sm md:text-base text-gray-700">
              <p>
                <span className="font-bold text-gray-900">Authors:</span>{" "}
                {publications[currentIndex].authors}
              </p>
              {publications[currentIndex].presentedAt && (
                <p>
                  <span className="font-bold text-gray-900">Presented at:</span>{" "}
                  {publications[currentIndex].presentedAt}
                </p>
              )}
              <p>
                <span className="font-bold text-gray-900">Journal:</span>{" "}
                {publications[currentIndex].publication}
              </p>
              {publications[currentIndex].quartile && (
                <p>
                  <span className="font-bold text-gray-900">Quartile:</span>{" "}
                  {publications[currentIndex].quartile}
                </p>
              )}
              {publications[currentIndex].indexing && (
                <p>
                  <span className="font-bold text-gray-900">Indexing:</span>{" "}
                  {publications[currentIndex].indexing}
                </p>
              )}
              {publications[currentIndex].publisher && (
                <p>
                  <span className="font-bold text-gray-900">Publisher:</span>{" "}
                  {publications[currentIndex].publisher}
                </p>
              )}
              <p>
                <span className="font-bold text-gray-900">Year:</span>{" "}
                {publications[currentIndex].year}
              </p>
              {publications[currentIndex].doi && (
                <p className="truncate">
                  <span className="font-bold text-gray-900">DOI:</span>{" "}
                  {publications[currentIndex].doi}
                </p>
              )}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {publications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-rose-700 w-6"
                    : "bg-rose-200 hover:bg-rose-400 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Nav buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-8 bg-white border border-gray-200 shadow-md text-rose-700 p-2 rounded-full hover:bg-rose-700 hover:text-white hover:border-rose-700 transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-8 bg-white border border-gray-200 shadow-md text-rose-700 p-2 rounded-full hover:bg-rose-700 hover:text-white hover:border-rose-700 transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* CTA */}
      <div className="max-w-5xl w-full mt-6 text-center">
        <p className="text-base md:text-lg text-gray-700 font-semibold">
          <span className="text-rose-700">
            Join us and publish in Scopus / SCIE indexed journals.
          </span>
        </p>
      </div>
    </div>
  );
}
