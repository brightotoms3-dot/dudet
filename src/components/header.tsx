import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold font-headline text-primary tracking-tight">
          Naija Slang Hub
        </Link>
        <Button asChild variant="ghost" className="text-accent-foreground bg-accent hover:bg-accent/90">
          <Link href="/submit">
            <PlusCircle className="mr-2 h-4 w-4" />
            Submit Slang
          </Link>
        </Button>
      </div>
    </header>
  );
}
