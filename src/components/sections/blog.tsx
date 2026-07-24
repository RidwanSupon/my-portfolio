import { ArrowUpRight, Clock } from 'lucide-react';

import { Reveal } from '@/components/common/reveal';
import { Section } from '@/components/common/section';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { posts } from '@/content/posts';
import { formatDate } from '@/lib/utils';

export function Blog() {
  if (posts.length === 0) return null;

  return (
    <Section
      id="writing"
      index={9}
      eyebrow="Writing"
      title="Notes on analysis, ERP, and delivery."
      description="Pieces on the parts of this work that are rarely written down — where specifications break, and what to do about it."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post, index) => {
          const Wrapper = post.href ? 'a' : 'div';
          return (
            <Reveal key={post.slug} delay={(index % 3) * 0.05}>
              <Wrapper
                {...(post.href
                  ? { href: post.href, target: '_blank', rel: 'noreferrer noopener' }
                  : {})}
                className="block h-full"
              >
                <Card className="group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="muted">{post.topic}</Badge>
                    {post.href && (
                      <ArrowUpRight
                        className="h-4 w-4 -translate-y-1 text-muted-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        aria-hidden
                      />
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t pt-4 text-xs text-muted-foreground">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden />
                      {post.readingMinutes} min
                    </span>
                  </div>
                </Card>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
