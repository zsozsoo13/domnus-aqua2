export type Language = 'hu' | 'ro';

export interface NavItem {
  id: string;
  label: {
    hu: string;
    ro: string;
  };
  href: string;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: {
    hu: string;
    ro: string;
  };
  description: {
    hu: string;
    ro: string;
  };
}

export interface PriceItem {
  name: {
    hu: string;
    ro: string;
  };
  price: string;
  note?: {
    hu: string;
    ro: string;
  };
}

export interface PriceCategory {
  id: string;
  title: {
    hu: string;
    ro: string;
  };
  items: PriceItem[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface ContactInfo {
  phoneReception: string;
  phoneManager: string;
  email: string;
  address: {
    hu: string;
    ro: string;
  };
  mapUrl: string;
}