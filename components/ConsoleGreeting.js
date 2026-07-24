"use client";
import { useEffect } from 'react';

export default function ConsoleGreeting() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(
        '%c AB UDYOG PVT. LTD. %c Eastern India\'s Premier Rice Bran Oil Refinery since 1994. Trade Desk: +91 74392 89709 | info@abudyog.in ',
        'background: #122A1C; color: #D4AF37; font-weight: bold; padding: 6px 10px; font-family: monospace;',
        'color: #122A1C; font-weight: bold; padding: 6px;'
      );
    }
  }, []);

  return null;
}
