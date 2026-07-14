export interface Clinic {
  name: string;
  tagline: string;
  description: string;

  phone: string;
  email: string;

  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };

  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };

  logo: string;
  heroImage: string;
  doctorImage: string;

  social: {
    facebook: string;
    instagram: string;
    whatsapp: string;
    googleMaps: string;
  };

  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}