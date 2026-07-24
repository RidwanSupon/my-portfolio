import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container grid min-h-[70vh] place-items-center py-24">
      <div className="text-center">
        <p className="section-index">Error 404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tightest sm:text-6xl">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The link may be out of date, or the page may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
