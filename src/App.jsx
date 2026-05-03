import { useState, useEffect, useRef } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "catalogo", label: "Catálogo" },
  { id: "certificado", label: "Certificación" },
  { id: "acerca", label: "Acerca de" },
];

const COURSES = [
  {
    id: 1,
    title: "Arquitecturas Big Data Avanzadas",
    category: "Análisis de Datos",
    level: "Avanzado",
    duration: "24h 30m",
    color: "bg-blue-600/90",
    description: "Domina pipelines de datos complejos y sistemas de almacenamiento distribuido con estándares TIC de la industria.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_ovslGHdGYCSCpIAWxUrWKwEGG5elCXBCq0DKvc0YvcFHzTgDRmShv0Idn2fvrfAQQ3N9w3EbYptWFU4hCdCyPthf-yGLDrhVwLhOVvNxBSjS_mwlnF1uW_7DTlOW7uMfxAGJqv93w_syJd97UrFEVKOz0gYlc73Mxrcjm8MYmsw5kLus7P39STLOC9Pji-coqQSpHulDT5U39kVlTNp9CV0FXm_oewDoU4P9ypDnbDaT1jpKPGRuftX8Rs2asbIIscxJTmdpbBY",
    instructor: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQBa5Uy_Z7Oc7QZdN-NGZJ2TnCwirBm1QPmhLuQhB3zWMZOz_u2eXAQmBC93oq1rLhO3cKZphRqDD5f-5KgiI1UmaZ4ITZQjqusKg5DfsSlHYzB5OL5koJVhWpKrNMnPLjJrcDNhIAwxhVNbQM8oqf8DW1XuQfqLFJ2_54Ruc5ensnrI6pGh2b8OrkzE1UeW0W-_BHsL5LpWvYSU1ICw18PGlngQhXsLK4FQXUJeu3nOzprB8WAe5-0kiiznppx2Uqmk9qnBuoNuc",
    instructorName: "Dr. Carlos Méndez",
  },
  {
    id: 2,
    title: "Infraestructura Zero Trust",
    category: "Seguridad Digital",
    level: "Especialista",
    duration: "18h 15m",
    color: "bg-red-600/90",
    description: "Implementa marcos de seguridad robustos para entornos empresariales usando los últimos protocolos de cifrado.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvuDRMice_FFGD1S_uHbWVMUs1j6T786LnzT4f1G8Gxf3r8uJ4ow15_TnStnoTpxIz8pVH-BLuEmZJmzYSgP3QzJ5Ia-j1V-l-IWO0FB35GC77OBwyWU_1KnOFdvfYHDYlAVrbz34B7AzvgtMIU8A7yyfceiuiBCqdydn-nJKWlv_q47q7OhgurZOt4wfoxQEBvYG9wVS5tWyUnpG_OlRf5JxbNzYi6RnRPWQKFmx8TCK3SeY_Lq1kehHgjXehxzmEOK0C0zOuFZE",
    instructor: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiDAuyzJrVJkLOxR_agOFOpBHPfX2AWibTuIKkAQ6JQkQkmPdnzcYhYCM9SO7geR4VmwaNqMm2c-uWrxlOnPm5EDAdtI5gLykxwgf2y4R5mBa_04Q-5sCac4hNpl3sty1NQRmNE6_KFdxBCY47NMxBio8036I60XIrVVA9fuUDuysQ5Znf0G4gYrhxt1QvDFz_RNEvxAM_8q0ET37Ds8Z8OS4XOTbMQPz4xYWspWtMiL2LuxQEFkp8-Ui2atHb5KYjIZe5rygFim4",
    instructorName: "Dra. Elena Rodríguez",
  },
  {
    id: 3,
    title: "Seguridad de Redes y Criptografía",
    category: "Seguridad Digital",
    level: "Intermedio",
    duration: "20h 00m",
    color: "bg-indigo-600/90",
    description: "Aprende los fundamentos y técnicas avanzadas de seguridad en redes empresariales y comunicaciones cifradas.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_KHVmxWMfwtnd3mCgG0niFi62TltmHLrdNTQln0y8WtSx_XWwCuqVSWqCpmgSahzmOXWLOKK1Gpcgm9hwh0lf3ymwd2EPsuDqCzTo5yOUP3OwTlUDmCgsduY33pEfmcnqpAVv4I5BX0vWad9_etIESR578ynlGr-Pj0SIotLy3b7TJc-wTfpkF5t47x7akRABGtnJzduJQTaDGB1ozCpOZtduDU6jmttUG8s0vpqDWFBWXxO9xu9uBGMGB6NvAifdZd9Y3guKNWs",
    instructor: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7U6XlFt70X5XopRtrLxt8SddJNga0FS093voDG70CxXKngiKbTSzqkpryP9UspI8eHcBlyAg4OwhsorBAkukKcAPUIN4BcVdouxBSqjD67GRHYcnoDdzKsMoJGdW5AntmpqrbHEm6MvvXa86_UxSSoLKXaKzeWKEXtRUok_kCyoe_NqqbHgFfIMkzfU0MwIyCxOhDKLLIxD5HtFAqIsAGasPiww7xpjYpMO8R28ePC4YCuSFQ6DifPAaQiUKEaRYiXiRfmEEnnxQ",
    instructorName: "Ing. Roberto Vega",
  },
  {
    id: 4,
    title: "Big Data Analytics con Python",
    category: "Análisis de Datos",
    level: "Avanzado",
    duration: "32h 00m",
    color: "bg-emerald-600/90",
    description: "Extrae insights accionables de grandes volúmenes de datos usando Python, Pandas, Spark y visualización avanzada.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEdvvzljgfarKtfI-Lwge3-aUdn8RJdnAjzqsup5AqrvhqcCbOtCKN9OejmTgLqkjG4tyvOKiag9S3CTbbUILVxHa4q_hJ0YMBXDzRWn85jy9LAK8Nb-oDEeIaLM3AeRTT3kWcKYEJffArRqV3zkYqNtXW7kPIW0-HkbFHZGE-sGzFcsCQ0zFNIBiqhNeg0Yi2MOU-Ert4hXXz_DkojpVgD2T-U8-zYD4DvrCZKc5L4s9QZ_FKx3L96jW7MrPwX1NC8JR8OEwVbJQ",
    instructor: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQBa5Uy_Z7Oc7QZdN-NGZJ2TnCwirBm1QPmhLuQhB3zWMZOz_u2eXAQmBC93oq1rLhO3cKZphRqDD5f-5KgiI1UmaZ4ITZQjqusKg5DfsSlHYzB5OL5koJVhWpKrNMnPLjJrcDNhIAwxhVNbQM8oqf8DW1XuQfqLFJ2_54Ruc5ensnrI6pGh2b8OrkzE1UeW0W-_BHsL5LpWvYSU1ICw18PGlngQhXsLK4FQXUJeu3nOzprB8WAe5-0kiiznppx2Uqmk9qnBuoNuc",
    instructorName: "Mtra. Laura Castillo",
  },
  {
    id: 5,
    title: "Office 365 para Empresas",
    category: "Office 365",
    level: "Básico",
    duration: "10h 00m",
    color: "bg-orange-500/90",
    description: "Maximiza la productividad empresarial con Teams, SharePoint, Power Automate y el ecosistema completo de Microsoft 365.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    instructor: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiDAuyzJrVJkLOxR_agOFOpBHPfX2AWibTuIKkAQ6JQkQkmPdnzcYhYCM9SO7geR4VmwaNqMm2c-uWrxlOnPm5EDAdtI5gLykxwgf2y4R5mBa_04Q-5sCac4hNpl3sty1NQRmNE6_KFdxBCY47NMxBio8036I60XIrVVA9fuUDuysQ5Znf0G4gYrhxt1QvDFz_RNEvxAM_8q0ET37Ds8Z8OS4XOTbMQPz4xYWspWtMiL2LuxQEFkp8-Ui2atHb5KYjIZe5rygFim4",
    instructorName: "Lic. Sofía Herrera",
  },
  {
    id: 6,
    title: "Protocolos de Seguridad en la Nube",
    category: "Seguridad Digital",
    level: "Avanzado",
    duration: "28h 45m",
    color: "bg-violet-600/90",
    description: "Implementación avanzada en AWS, Azure y Google Cloud. Modelos de responsabilidad compartida y gestión de identidades.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA811XvdT1PcWmztu21r3bN2twCUHjLTf8DF1tuYLUMDg5X6f7mkMMQz3981OTh-KwsRTfurWdS-O7z8UuaZkGJybI1agb9Kyyra6vg4Qq33ecb801gH24nvutdDV01soQ-WyBjYkZPZTsULCt2QAihTOrj4NikxiZRMAdc0zrReVr7QpjFPIbilIdKWviMXEkGkNtQhqk7hC_mAfmbgfvOxZnLUbXmDHDOa-fi3Lf-jJ6b8nSAQFX8Cdsy-oP0jQdNKX2CJLmdpoc",
    instructor: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7U6XlFt70X5XopRtrLxt8SddJNga0FS093voDG70CxXKngiKbTSzqkpryP9UspI8eHcBlyAg4OwhsorBAkukKcAPUIN4BcVdouxBSqjD67GRHYcnoDdzKsMoJGdW5AntmpqrbHEm6MvvXa86_UxSSoLKXaKzeWKEXtRUok_kCyoe_NqqbHgFfIMkzfU0MwIyCxOhDKLLIxD5HtFAqIsAGasPiww7xpjYpMO8R28ePC4YCuSFQ6DifPAaQiUKEaRYiXiRfmEEnnxQ",
    instructorName: "Dr. Alejandro Ruiz",
  },
];

const CATEGORIES = ["Todos", "Office 365", "Análisis de Datos", "Seguridad Digital"];

const STATS = [
  { value: "500+", label: "Módulos TIC" },
  { value: "12K+", label: "Profesionales capacitados" },
  { value: "98%", label: "Satisfacción" },
  { value: "40+", label: "Instructores expertos" },
];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="h-44 bg-slate-100 overflow-hidden relative">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className={`absolute top-3 left-3 ${course.color} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm`}>
        {course.category}
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="bg-blue-50 text-[#0052D4] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-tight">
          {course.level}
        </span>
        <div className="flex items-center text-slate-400 gap-1">
          <span className="material-symbols-outlined text-base">Duración</span>
          <span className="text-xs font-medium">{course.duration}</span>
        </div>
      </div>
      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#0052D4] transition-colors line-clamp-2 leading-snug">
        {course.title}
      </h3>
      <p className="text-sm text-slate-500 mb-5 line-clamp-2 leading-relaxed">
        {course.description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <img
            className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm"
            src={course.instructor}
            alt={course.instructorName}
          />
          <span className="text-xs text-slate-500 font-medium">{course.instructorName}</span>
        </div>
        <button
          onClick={() => document.getElementById("acerca").scrollIntoView({ behavior: "smooth" })}
          className="text-[#0052D4] font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all"
        >
          Más info <span className="material-symbols-outlined text-base">➡️</span>
        </button>
      </div>
    </div>
  </div>
);

// ─── SECTIONS ────────────────────────────────────────────────────────────────

const SeccionInicio = ({ onScrollTo }) => (
  <section id="inicio" className="min-h-screen flex items-center pt-16 pb-24 px-6 md:px-16 max-w-screen-xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0052D4] px-3 py-1.5 rounded-full mb-6 w-fit">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>✔️</span>
          <span className="text-[11px] font-bold uppercase tracking-widest">Certificación Profesional TIC</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
          Seguridad Digital &<br />
          <span className="text-[#0052D4]">Transformación TIC</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
          Capacitamos a los especialistas TIC del futuro. Programas diseñados por expertos de la industria, con certificación reconocida a nivel nacional.
        </p>

        <div className="flex flex-wrap gap-8 mb-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#0052D4]">{s.value}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onScrollTo("catalogo")}
            className="bg-[#0052D4] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-200 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            Ver Catálogo
          </button>
          <button
            onClick={() => onScrollTo("acerca")}
            className="border-2 border-slate-200 bg-white text-slate-800 px-8 py-3.5 rounded-xl font-bold hover:border-[#0052D4] hover:text-[#0052D4] transition-all"
          >
            Contáctanos
          </button>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-square">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA811XvdT1PcWmztu21r3bN2twCUHjLTf8DF1tuYLUMDg5X6f7mkMMQz3981OTh-KwsRTfurWdS-O7z8UuaZkGJybI1agb9Kyyra6vg4Qq33ecb801gH24nvutdDV01soQ-WyBjYkZPZTsULCt2QAihTOrj4NikxiZRMAdc0zrReVr7QpjFPIbilIdKWviMXEkGkNtQhqk7hC_mAfmbgfvOxZnLUbXmDHDOa-fi3Lf-jJ6b8nSAQFX8Cdsy-oP0jQdNKX2CJLmdpoc"
            alt="Centro de seguridad digital"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0052D4]/30 to-transparent" />
          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
            { /* Floating badge <span className="material-symbols-outlined text-[#0052D4]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span> */}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Certificación avalada</div>
              <div className="text-[11px] text-slate-500">Instituciones TIC nacionales</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SeccionCatalogo = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory);

  return (
    <section id="catalogo" className="py-24 px-6 md:px-16 bg-[#f7f9fb]">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">Catálogo de Cursos</h2>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Programas diseñados para el especialista TIC moderno. Domina las herramientas que la industria exige.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                activeCategory === cat
                  ? "bg-[#0052D4] text-white shadow-md shadow-blue-200"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-[#0052D4] hover:text-[#0052D4]"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto self-center text-sm text-slate-400 font-medium">
            {filtered.length} curso{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SeccionCertificado = () => (
  <section id="certificado" className="py-24 px-6 md:px-16">
    <div className="max-w-screen-xl mx-auto bg-white rounded-3xl border border-slate-100 p-10 md:p-16 shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[#0052D4] mb-6 bg-blue-50 px-3 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>🌟</span>
            <span className="text-[11px] font-bold uppercase tracking-widest">La Credencial</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
            Obtén tu Certificado Global
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Al completar cualquier programa, recibirás un certificado con firma criptográfica reconocido por las principales instituciones TIC del país. Una credencial que respalda tu expertise ante empleadores y clientes.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Reconocido por instituciones TIC nacionales",
              "Verificable en línea con código QR",
              "Firmado digitalmente con estándares internacionales",
              "Compartible en LinkedIn y portafolios",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700">
                <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#0052D4] text-sm">✅</span>
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mockup del Certificado */}
        <div className="flex justify-center">
          <div className="relative bg-white w-full max-w-sm aspect-[1.414/1] rounded-lg shadow-2xl border-[10px] border-[#003da2] p-6 flex flex-col items-center justify-between transform rotate-1">
            <div className="text-center">
              <p className="text-lg font-black text-[#0052D4] tracking-tight">As Tecnologías</p>
              <div className="h-px w-12 bg-blue-200 mx-auto mt-1" />
            </div>
            <div className="text-center">
              <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 mb-2">Certificado de Finalización</p>
              <p className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-2">NOMBRE DEL ALUMNO</p>
              <p className="text-[10px] text-slate-500 mt-2">Infraestructura Zero Trust</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
                <span className="material-symbols-outlined text-[#0052d4] text-lg">verified</span>
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-700">Verificado digitalmente</p>
                <p className="text-[8px] text-slate-400">astecnologias.com/verify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SeccionAcerca = () => {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) return;
    setEnviado(true);
  };

  return (
    <section id="acerca" className="py-24 px-6 md:px-16 bg-[#f7f9fb]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0052D4] px-3 py-1.5 rounded-full mb-6">
            <span className="material-symbols-outlined text-sm">ℹ️</span>
            <span className="text-[11px] font-bold uppercase tracking-widest">Acerca de nosotros</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
            Formando a los líderes TIC de México
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            AsTecnologías es una empresa 100% mexicana dedicada a la capacitación tecnológica empresarial. Desde 2015 hemos formado a más de 12,000 profesionales en seguridad digital, análisis de datos e infraestructura TIC.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Nuestros programas son desarrollados junto a las principales empresas del sector, garantizando que cada contenido responda a las necesidades reales del mercado laboral.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "Localizado en", label: "Durango, México" },
              { icon: "Llama al", label: "+52 618 000 0000" },
              { icon: "Email", label: "contacto@astecnologias.mx" },
              { icon: "Horario", label: "Lun–Vie, 9:00–18:00" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-[#0052D4] text-lg">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-1">¿Te interesa algún curso?</h3>
          <p className="text-sm text-slate-500 mb-6">Déjanos tus datos y un asesor se comunicará contigo.</p>

          {enviado ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-green-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-1">¡Mensaje enviado!</h4>
              <p className="text-sm text-slate-500">Un asesor se comunicará contigo pronto.</p>
              <button
                onClick={() => { setEnviado(false); setForm({ nombre: "", email: "", mensaje: "" }); }}
                className="mt-6 text-[#0052D4] text-sm font-bold hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Nombre completo</label>
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#0052D4] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Correo electrónico</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="tu@correo.com"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#0052D4] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Mensaje</label>
                <textarea
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder="¿En qué curso estás interesado? ¿Tienes alguna pregunta?"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#0052D4] transition-all resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#0052D4] text-white py-3 rounded-xl font-bold hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg shadow-blue-100"
              >
                Solicitar información
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

const Navbar = ({ activeSection, onScrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed top-0 w-full z-[100] border-b border-slate-200 shadow-sm">
      <div className="flex justify-between items-center h-16 px-6 md:px-16 max-w-screen-xl mx-auto">
        <button
          onClick={() => onScrollTo("inicio")}
          className="text-xl font-bold tracking-tighter text-[#0052D4] hover:opacity-80 transition-opacity"
        >
          As Tecnologías
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => onScrollTo(link.id)}
              className={`text-sm font-semibold transition-colors ${
                activeSection === link.id
                  ? "text-[#0052D4] border-b-2 border-[#0052D4] pb-0.5"
                  : "text-slate-500 hover:text-[#0052D4]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onScrollTo("acerca")}
            className="bg-[#0052D4] text-white px-5 py-2 rounded-lg font-bold text-sm hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            Contáctanos
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-700"
        >
          <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => { onScrollTo(link.id); setMenuOpen(false); }}
              className="block w-full text-left text-sm font-semibold text-slate-700 py-2 hover:text-[#0052D4]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { onScrollTo("acerca"); setMenuOpen(false); }}
            className="w-full mt-2 bg-[#0052D4] text-white py-2.5 rounded-lg font-bold text-sm"
          >
            Contáctanos
          </button>
        </div>
      )}
    </nav>
  );
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────

const Footer = ({ onScrollTo }) => (
  <footer className="bg-slate-900 text-white py-12 px-6 md:px-16">
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="text-xl font-bold tracking-tighter text-white mb-3">As Tecnologías</div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Capacitación TIC profesional para empresas y especialistas. Certificaciones reconocidas a nivel nacional.
          </p>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Navegación</div>
          <div className="space-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollTo(link.id)}
                className="block text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Contacto</div>
          <div className="space-y-2 text-sm text-slate-400">
            <p>contacto@astecnologias.mx</p>
            <p>+52 618 000 0000</p>
            <p>Durango, México</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} AsTecnologías. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Detecta qué sección está visible para resaltar el nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar activeSection={activeSection} onScrollTo={scrollTo} />

      <main className="pt-16">
        <SeccionInicio onScrollTo={scrollTo} />
        <SeccionCatalogo />
        <SeccionCertificado />
        <SeccionAcerca />
      </main>

      <Footer onScrollTo={scrollTo} />

      {/* Botón de contacto flotante */}
      <button
        onClick={() => scrollTo("acerca")}
        title="Contactar un asesor"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#0052D4] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-[90] shadow-blue-300"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>📞</span>
      </button>
    </div>
  );
}