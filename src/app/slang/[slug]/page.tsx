import { getSlangBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShareButtons } from '@/components/share-buttons';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slang = getSlangBySlug(params.slug);

  if (!slang) {
    return {
      title: 'Slang Not Found',
    };
  }

  return {
    title: `${slang.term} | Naija Slang Hub`,
    description: slang.meaning,
  };
}

export default function SlangDetailPage({ params }: Props) {
  const slang = getSlangBySlug(params.slug);

  if (!slang) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/30 p-8">
          <CardTitle className="text-4xl font-extrabold font-headline text-primary sm:text-5xl">
            {slang.term}
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80 mt-2">
            {slang.meaning}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div>
            <h3 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider mb-2">Example Usage</h3>
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
              "{slang.example}"
            </blockquote>
          </div>
          
           <div className="flex flex-wrap gap-2">
            {slang.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <div className="pt-6 border-t">
             <h3 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider mb-3">Share This Slang</h3>
            <ShareButtons slang={slang} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
