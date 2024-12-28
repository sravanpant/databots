export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}
