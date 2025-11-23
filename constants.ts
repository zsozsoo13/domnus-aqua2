import { NavItem, ServiceItem, PriceCategory, ContactInfo, GalleryImage } from './types';
import { Waves, User, Users, Activity, HeartPulse, Coffee, Trophy, Clock } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { id: 'services', label: { hu: 'Szolgáltatások', ro: 'Servicii' }, href: '#services' },
  { id: 'prices', label: { hu: 'Árak', ro: 'Prețuri' }, href: '#prices' },
  { id: 'gallery', label: { hu: 'Galéria', ro: 'Galerie' }, href: '#gallery' },
  { id: 'contact', label: { hu: 'Kapcsolat', ro: 'Contact' }, href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'kids-swim',
    iconName: 'Waves',
    title: { hu: 'Gyerek Úszásoktatás', ro: 'Cursuri înot copii' },
    description: { hu: 'Kezdő és haladó csoportok vagy személyreszabott egyéni órák.', ro: 'Grupuri pentru începători și avansați sau lecții individuale.' }
  },
  {
    id: 'adult-swim',
    iconName: 'User',
    title: { hu: 'Felnőtt Úszásoktatás', ro: 'Cursuri înot adulți' },
    description: { hu: 'Kezdőknek és újrakezdőknek, egyéni órák keretében is.', ro: 'Pentru începători și cei care revin la înot, inclusiv individual.' }
  },
  {
    id: 'aqua-fitness',
    iconName: 'Activity',
    title: { hu: 'Aqua Fitness', ro: 'Aqua Fitness' },
    description: { hu: 'Lendületes, zenés vízi edzés a test és lélek formálásáért.', ro: 'Antrenament acvatic energic, pe muzică, pentru trup și suflet.' }
  },
  {
    id: 'therapy',
    iconName: 'HeartPulse',
    title: { hu: 'Vízi Gyógytorna', ro: 'Gimnastică Acvatică' },
    description: { hu: 'A test felfrissítésére és kíméletes rehabilitációra.', ro: 'Pentru revigorarea corpului și reabilitare blândă.' }
  },
  {
    id: 'massage',
    iconName: 'Users', // Using Users as generic body/care
    title: { hu: 'Masszázs', ro: 'Masaj' },
    description: { hu: 'Teljes test, hát vagy köpölymasszázs a teljes ellazulásért.', ro: 'Masaj corporal complet, de spate sau cu ventuze.' }
  },
  {
    id: 'sauna',
    iconName: 'Waves', // Steam/Heat
    title: { hu: 'Szauna', ro: 'Saună' },
    description: { hu: 'A tökéletes levezetés és méregtelenítés.', ro: 'Relaxarea perfectă și detoxifiere.' }
  },
  {
    id: 'bar',
    iconName: 'Coffee',
    title: { hu: 'Mini Bár', ro: 'Mini Bar' },
    description: { hu: 'Frissítő italok, kávé különlegességek a pihenéshez.', ro: 'Băuturi răcoritoare, cafele speciale pentru relaxare.' }
  },
  {
    id: 'camps',
    iconName: 'Trophy',
    title: { hu: 'Úszás és Foci Táborok', ro: 'Tabere Înot & Fotbal' },
    description: { hu: 'Táborok szervezése szállással, étkezéssel már 150 lej/fő/nap.', ro: 'Organizarea taberelor cu cazare și masă de la 150 RON/zi.' }
  }
];

export const PRICES: PriceCategory[] = [
  {
    id: 'general',
    title: { hu: 'Általános Belépők', ro: 'Bilete Generale' },
    items: [
      { name: { hu: 'Medencetér látogatás', ro: 'Vizitare bazin' }, price: '5 RON' },
      { name: { hu: 'Szauna', ro: 'Saună' }, price: '10 RON' },
      { name: { hu: 'Úszó sáv bérlés', ro: 'Închiriere culoar' }, price: '90 RON / 1 h' },
      { name: { hu: 'Gyerek belépő (0-3 év)', ro: 'Acces copii (0-3 ani)' }, price: 'INGYENES / GRATUIT', note: { hu: 'szülői felügyelettel', ro: 'cu părinți' } },
    ]
  },
  {
    id: 'kids',
    title: { hu: 'Gyerekek & Diákok', ro: 'Copii & Studenți' },
    items: [
      { name: { hu: 'Gyerek jegy (1 óra)', ro: 'Bilet copil (1 oră)' }, price: '13 RON' },
      { name: { hu: 'Gyerek jegy (2 óra)', ro: 'Bilet copil (2 ore)' }, price: '25 RON' },
      { name: { hu: 'Gyerek jegy (3 óra)', ro: 'Bilet copil (3 ore)' }, price: '30 RON' },
      { name: { hu: 'Gyerek bérlet (10 óra)', ro: 'Abonament copil (10 ore)' }, price: '100 RON', note: { hu: '30 napig érvényes', ro: 'valabil 30 zile' } },
      { name: { hu: 'Gyerek bérlet (20 óra)', ro: 'Abonament copil (20 ore)' }, price: '200 RON', note: { hu: '30 napig érvényes', ro: 'valabil 30 zile' } },
    ]
  },
  {
    id: 'adults',
    title: { hu: 'Felnőttek', ro: 'Adulți' },
    items: [
      { name: { hu: 'Felnőtt jegy (1 óra)', ro: 'Bilet adult (1 oră)' }, price: '18 RON' },
      { name: { hu: 'Felnőtt jegy (2 óra)', ro: 'Bilet adult (2 ore)' }, price: '30 RON' },
      { name: { hu: 'Felnőtt jegy (3 óra)', ro: 'Bilet adult (3 ore)' }, price: '40 RON' },
      { name: { hu: 'Felnőtt bérlet (10 óra)', ro: 'Abonament adult (10 ore)' }, price: '150 RON', note: { hu: '30 napig érvényes', ro: 'valabil 30 zile' } },
      { name: { hu: 'Felnőtt bérlet (20 óra)', ro: 'Abonament adult (20 ore)' }, price: '300 RON', note: { hu: '30 napig érvényes', ro: 'valabil 30 zile' } },
    ]
  },
  {
    id: 'seniors',
    title: { hu: 'Nyugdíjasok', ro: 'Pensionari' },
    items: [
      { name: { hu: 'Nyugdíjas jegy (1 óra)', ro: 'Bilet pensionar (1 oră)' }, price: '15 RON' },
      { name: { hu: 'Nyugdíjas jegy (2 óra)', ro: 'Bilet pensionar (2 ore)' }, price: '25 RON' },
      { name: { hu: 'Nyugdíjas jegy (3 óra)', ro: 'Bilet pensionar (3 ore)' }, price: '30 RON' },
      { name: { hu: 'Nyugdíjas bérlet (10 óra)', ro: 'Abonament pensionar (10 ore)' }, price: '100 RON', note: { hu: '30 napig érvényes', ro: 'valabil 30 zile' } },
    ]
  },
  {
    id: 'services_price',
    title: { hu: 'Szolgáltatások Árai', ro: 'Prețuri Servicii' },
    items: [
      { name: { hu: 'Úszásoktatás (Csoportos - 8 alkalom)', ro: 'Cursuri înot (Grup - 8 șed.)' }, price: '310 RON' },
      { name: { hu: 'Úszásoktatás (Egyéni - 60 perc)', ro: 'Cursuri înot (Individual - 60 min)' }, price: '90 RON' },
      { name: { hu: 'Úszásoktatás (2 fő - 60 perc)', ro: 'Cursuri înot (2 pers - 60 min)' }, price: '140 RON' },
      { name: { hu: 'Aqua Fitness (5 alkalom)', ro: 'Aqua Fitness (5 șed.)' }, price: '175 RON' },
      { name: { hu: 'Relaxációs masszázs (55 perc)', ro: 'Masaj relaxare (55 min)' }, price: '90 RON' },
      { name: { hu: 'Hát masszázs (30 perc)', ro: 'Masaj spate (30 min)' }, price: '70 RON' },
    ]
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/tanuszoda.jpg', alt: 'Medence', category: 'pool' },
  { src: '/medenceter.jpg', alt: 'Architecture', category: 'building' },
  { src: '/medenceter1.jpg', alt: 'Swimming Lesson', category: 'activity' },
  { src: '/minibararak.jpeg', alt: 'Sauna', category: 'wellness' },
  { src: '/masszazs.jpg', alt: 'Relaxation Area', category: 'wellness' },
  { src: '/oltozok.jpg', alt: 'Evening Pool', category: 'pool' },
  { src: '/recepcio.jpg', alt: 'Massage', category: 'wellness' },
  { src: '/szauna1.jpg', alt: 'Training', category: 'activity' },
  { src: '/szauna2.jpg', alt: 'Training', category: 'activity' },
]; // <<<--- ITT VOLT A HIÁNYZÓ ZÁRÁS!

export const CONTACT_INFO: ContactInfo = {
  phoneReception: '0742 771 036',
  phoneManager: '+40 759 430 835',
  email: 'office@domnusaqua.ro',
  address: {
    hu: 'Csíkszentdomokos, DJ125 89, 537275, Hargita megye, Románia',
    ro: 'Sândominic, DJ125 89, 537275, Județul Harghita, România'
  },
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.7676569264154!2d25.792750500000004!3d46.57205979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474ac52ef0a9a3bf%3A0xd055125a1d919a01!2zQmF6aW4gaW5vdCBTYW5kb21pbmljIC0gQ3Npa3N6ZW50ZG9tb2tvc2kgdXN6b2Rh!5e0!3m2!1shu!2sro!4v1762701169195!5m2!1shu!2sro'
};