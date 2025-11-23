import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, MapPin, Phone, Mail, Clock, ChevronDown, Check, Droplets, Dumbbell, Heart, Coffee, Trophy, User } from 'lucide-react';
import { NAV_ITEMS, SERVICES, PRICES, GALLERY_IMAGES, CONTACT_INFO } from './constants';
import { Language } from './types';

// Helper for dynamic icons
const IconMap = {
  Waves: Droplets,
  User: User,
  Users: User,
  Activity: Dumbbell,
  HeartPulse: Heart,
  Coffee: Coffee,
  Trophy: Trophy,
  Clock: Clock
};

export default function App() {
  const [lang, setLang] = useState<Language>('hu');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePriceTab, setActivePriceTab] = useState('general');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Handle Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'hu' ? 'ro' : 'hu');
  };

  const navBackground = scrolled 
    ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-white/10' 
    : 'bg-transparent';

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-ocean-500 selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
             <div className="relative w-10 h-10 flex items-center justify-center bg-ocean-500 rounded-lg overflow-hidden group-hover:scale-110 transition-transform">
                <Droplets className="text-white w-6 h-6" />
             </div>
             <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none tracking-tight">DOMNUS<span className="text-ocean-400">AQUA</span></span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">{lang === 'hu' ? 'Tanuszoda' : 'Bazin Înot'}</span>
             </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.id} 
                href={item.href}
                className="text-sm font-medium hover:text-ocean-400 transition-colors uppercase tracking-wide"
              >
                {item.label[lang]}
              </a>
            ))}
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-sm font-bold transition-all border border-white/10"
            >
              <Globe className="w-4 h-4" />
              <span>{lang.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {NAV_ITEMS.map((item) => (
                  <a 
                    key={item.id} 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium hover:text-ocean-400 text-center"
                  >
                    {item.label[lang]}
                  </a>
                ))}
                <button 
                  onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                  className="flex items-center justify-center gap-2 bg-ocean-600 py-3 rounded-lg mt-4"
                >
                  <Globe className="w-4 h-4" />
                  Switch to {lang === 'hu' ? 'RO' : 'HU'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=1920" 
            alt="Pool Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-950"></div>
        </div>

        {/* Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4 flex justify-center">
            <span className="bg-ocean-500/20 text-ocean-300 border border-ocean-500/30 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
              {lang === 'hu' ? 'Csíkszentdomokos' : 'Sândominic'}
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-100 to-cyan-200 drop-shadow-lg">
              {lang === 'hu' ? 'Csíkszentdomokosi Tanuszoda' : 'Bazinul de înot Sândominic'}
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {lang === 'hu' 
              ? 'Fedezd fel a test és lélek felüdülését modern környezetben. Úszásoktatás, szauna, masszázs és kikapcsolódás az egész családnak.' 
              : 'Descoperă revitalizarea trupului și a sufletului într-un mediu modern. Cursuri de înot, saună, masaj și relaxare pentru întreaga familie.'}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-ocean-500 hover:bg-ocean-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transform hover:-translate-y-1 text-lg">
              {lang === 'hu' ? 'Szolgáltatások' : 'Serviciile Noastre'}
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* --- INFO STRIP (Opening Hours & Quick Call) --- */}
      <div className="relative z-20 -mt-16 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Opening Hours */}
          <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
            <div className="flex items-center gap-3 text-ocean-400 mb-2">
              <Clock className="w-6 h-6" />
              <h3 className="font-heading font-bold text-xl uppercase tracking-wide">{lang === 'hu' ? 'Nyitvatartás' : 'Program'}</h3>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="font-semibold">{lang === 'hu' ? 'Hétfő - Péntek' : 'Luni - Vineri'}:</span>
              <span>16:00 – 21:00</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="font-semibold">{lang === 'hu' ? 'Szombat - Vasárnap' : 'Sâmbătă - Duminică'}:</span>
              <span>14:00 – 20:00</span>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col gap-4 md:pl-6">
            <div className="flex items-center gap-3 text-ocean-400">
              <Phone className="w-6 h-6" />
              <h3 className="font-heading font-bold text-xl uppercase tracking-wide">{lang === 'hu' ? 'Bejelentkezés' : 'Programări'}</h3>
            </div>
            <p className="text-slate-400 text-sm">
              {lang === 'hu' ? 'A szolgáltatásokra való jelentkezés programáláshoz kötött.' : 'Participarea la servicii se face doar pe bază de programare.'}
            </p>
            <a href={`tel:${CONTACT_INFO.phoneReception.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 bg-ocean-500/10 hover:bg-ocean-500/20 text-ocean-400 font-bold py-3 px-6 rounded-lg border border-ocean-500/50 transition-colors">
              <Phone className="w-4 h-4" />
              {CONTACT_INFO.phoneReception}
            </a>
          </div>
        </motion.div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              <span className="text-ocean-400">DOMUS</span> AQUA
              <span className="block text-2xl md:text-3xl text-white mt-2 font-light">{lang === 'hu' ? 'Szolgáltatások' : 'Servicii'}</span>
            </h2>
            <div className="w-20 h-1 bg-ocean-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = IconMap[service.iconName as keyof typeof IconMap] || Droplets;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900 border border-white/5 p-6 rounded-2xl hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-ocean-500/10"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-ocean-500 transition-colors">
                    <Icon className="w-6 h-6 text-ocean-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{service.title[lang]}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                    {service.description[lang]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="prices" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              {lang === 'hu' ? 'Árak és Bérletek' : 'Prețuri și Abonamente'}
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              {lang === 'hu' 
                ? 'Válassza ki az Önnek megfelelő kategóriát az árak megtekintéséhez.' 
                : 'Selectați categoria potrivită pentru a vedea prețurile.'}
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {PRICES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActivePriceTab(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activePriceTab === category.id 
                    ? 'bg-ocean-500 text-white shadow-lg shadow-ocean-500/25 scale-105' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {category.title[lang]}
              </button>
            ))}
          </div>

          {/* Pricing Content */}
          <div className="max-w-3xl mx-auto min-h-[400px]">
            <AnimatePresence mode='wait'>
              {PRICES.map((category) => (
                activePriceTab === category.id && (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/5"
                  >
                    <div className="p-6 md:p-8 bg-ocean-900/20 border-b border-white/5">
                      <h3 className="font-heading text-2xl font-bold text-ocean-100">{category.title[lang]}</h3>
                    </div>
                    <div className="divide-y divide-white/5">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                          <div>
                            <h4 className="font-bold text-lg text-slate-200">{item.name[lang]}</h4>
                            {item.note && (
                              <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {item.note[lang]}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center justify-between md:justify-end gap-4 min-w-[140px]">
                             <span className="text-xl font-bold text-ocean-400 whitespace-nowrap">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section id="gallery" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            {lang === 'hu' ? 'Galéria' : 'Galerie'}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
             {GALLERY_IMAGES.map((img, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setLightboxImage(img.src)}
                  className={`relative rounded-xl overflow-hidden cursor-pointer group ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest uppercase border border-white px-4 py-2">View</span>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-gradient-to-t from-ocean-900 to-slate-900 text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                {lang === 'hu' ? 'Lépjen velünk kapcsolatba!' : 'Contactați-ne!'}
              </h2>
              <p className="text-ocean-100 text-lg mb-10 leading-relaxed">
                {lang === 'hu' 
                  ? 'Találjon meg minket Csíkszentdomokoson! Várjuk kérdéseit telefonon vagy személyesen.' 
                  : 'Ne găsiți în Sândominic! Așteptăm întrebările dumneavoastră la telefon sau personal.'}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-ocean-300" />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg">{lang === 'hu' ? 'Recepció' : 'Recepție'}</h4>
                      <a href={`tel:${CONTACT_INFO.phoneReception.replace(/\s/g, '')}`} className="text-slate-300 hover:text-white transition-colors">{CONTACT_INFO.phoneReception}</a>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-ocean-300" />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg">{lang === 'hu' ? 'Kapcsolattartás (Bara Artúr)' : 'Contact (Bara Artúr)'}</h4>
                      <a href={`tel:${CONTACT_INFO.phoneManager.replace(/\s/g, '')}`} className="text-slate-300 hover:text-white transition-colors">{CONTACT_INFO.phoneManager}</a>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-ocean-300" />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg">Email</h4>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-300 hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-ocean-300" />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg">{lang === 'hu' ? 'Cím' : 'Adresă'}</h4>
                      <p className="text-slate-300">{CONTACT_INFO.address[lang]}</p>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="h-[500px] w-full bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative"
            >
               <iframe 
                 src={CONTACT_INFO.mapUrl}
                 className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                 style={{ border: 0 }}
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Map"
               ></iframe>
               <div className="absolute top-4 right-4 bg-white/90 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg pointer-events-none">
                 DJ125 89
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 py-12 border-t border-white/5 text-center md:text-left">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="font-heading font-bold text-xl mb-2">DOMUS<span className="text-ocean-400">AQUA</span></h3>
                <p className="text-slate-500 text-sm">© 2025 All rights reserved.</p>
              </div>
              
              <div className="flex gap-4">
                 <a href="https://www.facebook.com/profile.php?id=100092718712285" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-400 p-3 rounded-full transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                 </a>
              </div>
           </div>
        </div>
      </footer>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightboxImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightboxImage} 
              alt="Fullscreen" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
            />
            <button className="absolute top-6 right-6 text-white hover:text-ocean-400 transition-colors">
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}