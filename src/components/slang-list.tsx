'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import type { Slang } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

interface SlangListProps {
  slangs: Slang[];
}

export function SlangList({ slangs }: SlangListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSlangs = useMemo(() => {
    if (!searchTerm) {
      return slangs;
    }
    return slangs.filter(slang =>
      slang.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slang.meaning.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, slangs]);

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for a slang... (e.g. Sapa, Japa)"
          className="pl-10 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search for a slang"
        />
      </div>

      {filteredSlangs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSlangs.map((slang) => (
            <Link href={`/slang/${slang.slug}`} key={slang.id} className="group">
              <Card className="h-full transition-all duration-300 ease-in-out hover:border-primary hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {slang.term}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2">{slang.meaning}</p>
                   <div className="mt-4 flex flex-wrap gap-2">
                    {slang.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl font-semibold">No Slangs Found</p>
          <p className="text-muted-foreground mt-2">Try a different search term or submit a new slang!</p>
        </div>
      )}
    </div>
  );
}
