import { getSlangs } from '@/lib/data';
import { SlangList } from '@/components/slang-list';

export default function Home() {
  const slangs = getSlangs();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl lg:text-6xl">
          The Ultimate <span className="text-primary">Naija</span> Slangtionary
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Your go-to source for understanding and using Nigerian street language. Wahala for who no sabi!
        </p>
      </div>
      <SlangList slangs={slangs} />
    </div>
  );
}
