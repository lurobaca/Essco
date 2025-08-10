import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Cpu, Cloud, Wrench, Mail, Phone, MapPin, ArrowRight, Menu, X } from "lucide-react";

export default function App() {
  return <EsscoLanding />;
}

function EsscoLanding() {
  const [open, setOpen] = React.useState(false);

  const nav = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "proyectos", label: "Proyectos" },
    { id: "nosotros", label: "Nosotros" },
    { id: "contacto", label: "Contacto" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div onClick={() => scrollTo("inicio")} className="flex items-center gap-3 cursor-pointer">
              <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">E</div>
              <div className="leading-tight">
                <div className="font-bold text-slate-900 text-lg tracking-tight">ESSCO</div>
                <div className="text-xs text-slate-500 -mt-0.5">Soluciones que impulsan</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {nav.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  {n.label}
                </button>
              ))}
              <button onClick={() => scrollTo("contacto")} className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl shadow-sm hover:shadow transition-all">
                Contáctanos <ArrowRight className="h-4 w-4" />
              </button>
            </nav>

            <button className="md:hidden p-2 rounded-xl hover:bg-slate-100" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
              {nav.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-2 text-slate-700">
                  {n.label}
                </button>
              ))}
              <button onClick={() => scrollTo("contacto")} className="mt-2 inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl">
                Contáctanos <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_80%_-10%,#e2e8f0,transparent),radial-gradient(30rem_30rem_at_10%_10%,#f1f5f9,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100 rounded-full px-3 py-1 mb-4">
                <Shield className="h-3.5 w-3.5" /> Tecnología confiable para tu negocio
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Impulsamos tu crecimiento con software a la medida
              </h1>
              <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                En ESSCO ayudamos a empresas en Costa Rica a modernizar procesos, integrar sistemas y lanzar productos digitales con rapidez y calidad.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => scrollTo("servicios")} className="px-5 py-3 rounded-2xl bg-slate-900 text-white hover:shadow-md transition">Ver servicios</button>
                <button onClick={() => scrollTo("contacto")} className="px-5 py-3 rounded-2xl border border-slate-300 text-slate-800 hover:bg-slate-50">Solicitar reunión</button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Entrega ágil</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Enfoque en seguridad</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Soporte cercano</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-white shadow-xl p-6 grid grid-cols-2 gap-4">
                {[
                  { icon: <Cpu className="h-6 w-6" />, title: "Desarrollo a medida", desc: "Web, APIs, integraciones" },
                  { icon: <Cloud className="h-6 w-6" />, title: "Nube & DevOps", desc: "Azure, CI/CD, monitoreo" },
                  { icon: <Shield className="h-6 w-6" />, title: "Cumplimiento FE 4.4", desc: "Hacienda, firmas, validación" },
                  { icon: <Wrench className="h-6 w-6" />, title: "Soporte & modernización", desc: "Migraciones .NET" },
                ].map((c, i) => (
                  <div key={i} className="rounded-2xl border border-slate-200 p-4 hover:shadow-sm transition">
                    <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center mb-3">
                      {c.icon}
                    </div>
                    <div className="font-semibold text-slate-900">{c.title}</div>
                    <div className="text-sm text-slate-600 mt-1">{c.desc}</div>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-6 -right-6 h-28 w-28 bg-slate-100 rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Servicios</h2>
            <p className="mt-2 text-slate-600">Diseñados para resultados medibles y rápidos.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Consultoría tecnológica",
                bullets: [
                  "Diagnóstico de procesos y arquitectura",
                  "Estrategia de modernización",
                  "Roadmap y estimaciones",
                ],
              },
              {
                title: "Desarrollo de software",
                bullets: [
                  ".NET, C#, ASP.NET MVC/Core",
                  "APIs REST, integraciones SAP B1",
                  "Frontends modernos (React)",
                ],
              },
              {
                title: "Factura Electrónica 4.4",
                bullets: [
                  "Generación y validación XML",
                  "Firmas criptográficas, envío a Hacienda",
                  "Notas de crédito/débito, contingencia",
                ],
              },
              {
                title: "Azure DevOps & CI/CD",
                bullets: [
                  "Pipelines multiambiente (DEV/QA/UAT/PROD)",
                  "Versionado DB, despliegues IIS/Cloud",
                  "Monitoreo y alertas",
                ],
              },
              {
                title: "Nube (Azure/GCP)",
                bullets: [
                  "Diseño seguro y rentable",
                  "Contenedores y orquestación",
                  "Backups y resiliencia",
                ],
              },
              {
                title: "Soporte y mantenimiento",
                bullets: [
                  "SLA y mesa de ayuda",
                  "Optimización de performance SQL",
                  "Hardening y mejores prácticas",
                ],
              },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-3xl border border-slate-200 p-6 hover:shadow-md transition">
                <div className="font-semibold text-lg text-slate-900">{s.title}</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="proyectos" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Proyectos recientes</h2>
            <p className="mt-2 text-slate-600">Resultados concretos con impacto en operación y ventas.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "Retail",
                title: "Comparador de precios con FE 4.4",
                desc: "Extracción de datos desde Hacienda, normalización por CAByS y dashboard de precios en tiempo real.",
              },
              {
                tag: "Manufactura",
                title: "Integración SAP B1 → Web",
                desc: "APIs seguras para órdenes, inventarios y facturación; portal para clientes con autenticación.",
              },
              {
                tag: "Gobierno",
                title: "DevOps e infraestructura",
                desc: "Pipeline multiambiente con aprobaciones, hardening de servidores y monitoreo proactivo.",
              },
            ].map((p, i) => (
              <div key={i} className="rounded-3xl bg-white border border-slate-200 p-6 hover:shadow-md transition">
                <div className="text-xs inline-flex px-2 py-1 rounded-full bg-slate-100 text-slate-700">{p.tag}</div>
                <div className="mt-3 font-semibold text-slate-900">{p.title}</div>
                <div className="mt-2 text-sm text-slate-600">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">¿Por qué ESSCO?</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Combinamos experiencia técnica en .NET, Azure y Factura Electrónica con un enfoque humano y transparente.
                Trabajamos cerca de tu equipo, entregando en iteraciones cortas y priorizando la seguridad.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                {[
                  "Equipo senior con enfoque en calidad",
                  "Metodologías ágiles y documentación clara",
                  "Acompañamiento post‑implementación",
                ].map((b, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                {[
                  { k: "+10", v: "años de experiencia" },
                  { k: "+30", v: "proyectos entregados" },
                  { k: "99%", v: "incidencias resueltas" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-2xl bg-slate-50 p-6">
                    <div className="text-3xl font-extrabold text-slate-900">{stat.k}</div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">{stat.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs text-slate-500 text-center">*Valores demostrativos; personalízalos con tus métricas.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Hablemos</h2>
            <p className="mt-2 text-slate-600">Cuéntanos tu reto y te proponemos un plan simple para empezar en menos de 7 días.</p>
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-600">Nombre</label>
                  <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Correo</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="tucorreo@dominio.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-slate-600">Mensaje</label>
                  <textarea rows={5} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="¿En qué te ayudamos?" />
                </div>
              </div>
              <button className="mt-4 inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-2xl hover:shadow-md">
                Enviar <ArrowRight className="h-4 w-4" />
              </button>
              <div className="mt-4 text-xs text-slate-500">*Este formulario es de demostración. Conéctalo a tu backend o a un servicio como Formspree.</div>
            </form>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 text-slate-700" />
                  <div>
                    <div className="text-sm text-slate-500">Correo</div>
                    <div className="font-medium">contacto@essco.cr</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 text-slate-700" />
                  <div>
                    <div className="text-sm text-slate-500">Teléfono / WhatsApp</div>
                    <div className="font-medium">+506 8888‑8888</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-slate-700" />
                  <div>
                    <div className="text-sm text-slate-500">Ubicación</div>
                    <div className="font-medium">San José, Costa Rica</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-sm text-slate-600">¿Prefieres reunirte?</div>
                  <button onClick={() => scrollTo("contacto")} className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50">
                    Agendar una llamada <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold">Construyamos tu próximo release</h3>
                <p className="mt-2 text-slate-300">Un sprint de 2 semanas para entregar algo útil en producción.</p>
              </div>
              <div className="md:text-right">
                <button onClick={() => scrollTo("contacto")} className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-2xl font-medium">
                  Empezar ahora <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">E</div>
              <div className="text-sm text-slate-600">© {new Date().getFullYear()} ESSCO. Todos los derechos reservados.</div>
            </div>
            <div className="text-sm text-slate-500">Privacidad · Términos · Soporte</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
