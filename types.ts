export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  size: 'small' | 'medium' | 'large';
}

export interface Service {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface NavItem {
  label: string;
  href: string;
}