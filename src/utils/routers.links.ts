export type sidebarPagesType = {
  name: string;
  route: string;
  external?: boolean;
}[];

export const sidebarPages: sidebarPagesType = [
  { name: 'Login', route: '/login' },
  { name: 'Home', route: '/menu' },
  { name: 'Dashboard', route: '/dashboard' },
  { name: 'Website Ford', route: 'https://devjsilva5.github.io/WEBSITE-FORD-ENTER/', external: true }
];
