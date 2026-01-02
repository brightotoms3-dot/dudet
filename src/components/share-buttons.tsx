'use client';

import { useState, useEffect } from 'react';
import type { Slang } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

const TwitterIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>;
const WhatsAppIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><title>WhatsApp</title><path d="M19.11 4.91C17.22 3 14.68 1.95 12.02 1.95c-5.46 0-9.91 4.45-9.91 9.91 0 1.76.46 3.53 1.38 5.04L.3 23.7l6.9-1.82c1.45.83 3.12 1.28 4.8 1.28h.01c5.46 0 9.9-4.44 9.91-9.91.01-2.67-1.04-5.2-2.9-7.1zM12.02 21.07c-1.58 0-3.14-.42-4.48-1.22l-.32-.19-3.34.88.89-3.25-.21-.34c-.87-1.4-1.35-3.03-1.35-4.73 0-4.59 3.74-8.32 8.33-8.32 2.24 0 4.36.88 5.9 2.42 1.54 1.54 2.42 3.66 2.42 5.9-   .01 4.58-3.75 8.32-8.33 8.32zm4.6-6.53c-.28-.14-1.65-.82-1.9-.91-.26-.09-.44-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.72-1.39-1.62-1.56-1.89-.17-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.46.09-.19.05-.36-.02-.5-.07-.14-.63-1.51-.86-2.08-.23-.57-.46-.49-.63-.49-.17 0-.36-.02-.53-.02-.17 0-.46.07-.7.35-.24.28-.91.89-.91 2.17 0 1.28.93 2.52 1.06 2.7.13.19 1.83 2.8 4.44 3.91 2.61 1.1 2.61.74 3.08.7.47-.04 1.65-.68 1.88-1.33.24-.65.24-1.2.16-1.33-.07-.15-.25-.23-.53-.38z"/></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram h-4 w-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;

interface ShareButtonsProps {
  slang: Slang;
}

export function ShareButtons({ slang }: ShareButtonsProps) {
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  if (!pageUrl) {
    return null; // Don't render on server
  }

  const text = `Check out this Naija slang: "${slang.term}" - It means "${slang.meaning}".\n\nSee more at Naija Slang Hub: ${pageUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  
  // Instagram sharing is tricky, best we can do is copy text
  const handleInstagramShare = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Slang details copied to clipboard! Paste it in your Instagram post.");
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button asChild variant="outline">
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <TwitterIcon /> <span className="ml-2">Share on X</span>
        </a>
      </Button>
      <Button asChild variant="outline">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> <span className="ml-2">Share on WhatsApp</span>
        </a>
      </Button>
      <Button variant="outline" onClick={handleInstagramShare}>
        <InstagramIcon /> <span className="ml-2">Share on Instagram</span>
      </Button>
    </div>
  );
}
