'use client';
import { CookiesProvider } from 'react-cookie';

export default function ABLayout({ children }) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
