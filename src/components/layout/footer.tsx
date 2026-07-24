import { SocialLinks } from '@/components/common/social-links';
import { profile } from '@/content/profile';
import { navigation } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl font-semibold tracking-tightest text-balance">
              Let&rsquo;s build software that solves real business problems.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {profile.title} at {profile.company} · {profile.location}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js &amp; TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
