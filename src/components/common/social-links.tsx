'use client';

import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

import { socials } from '@/content/profile';
import { cn } from '@/lib/utils';

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  whatsapp: MessageCircle,
} as const;

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {socials.map((social) => {
        const Icon = ICONS[social.icon];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.label}
              className="grid h-10 w-10 place-items-center rounded-full border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Icon className="h-4 w-4" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
