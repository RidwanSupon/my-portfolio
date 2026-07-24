'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, Loader2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

import { Reveal } from '@/components/common/reveal';
import { Section } from '@/components/common/section';
import { SocialLinks } from '@/components/common/social-links';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input, Textarea } from '@/components/ui/input';
import { profile } from '@/content/profile';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().optional(),
  message: z.string().min(20, 'A little more detail helps — 20 characters minimum.'),
});

type FormValues = z.infer<typeof schema>;

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  /**
   * Posts to NEXT_PUBLIC_CONTACT_ENDPOINT when one is configured (Formspree,
   * Web3Forms, or similar). Without an endpoint the form composes a prefilled
   * email instead — a working fallback beats a submit button that silently
   * does nothing on a fresh clone.
   */
  async function onSubmit(values: FormValues) {
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

    if (!endpoint) {
      const subject = encodeURIComponent(`Enquiry from ${values.name}`);
      const body = encodeURIComponent(
        `${values.message}\n\n—\n${values.name}${values.company ? `\n${values.company}` : ''}\n${values.email}`,
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
      reset();
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus('sent');
      reset();
    } catch {
      setStatus('error');
    }
  }

  const details = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: profile.whatsapp,
      href: `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`,
    },
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
  ];

  return (
    <Section
      id="contact"
      index={10}
      eyebrow="Contact"
      title="Tell me what you are trying to build."
      description="The more context you can give about the business problem, the more useful my first reply will be."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <div className="space-y-4">
            <Card className="p-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                {profile.availability}
              </p>

              <ul className="mt-6 space-y-4">
                {details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground">
                      <detail.icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer noopener"
                          className="link-underline break-all text-sm font-medium"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t pt-5">
                <SocialLinks />
              </div>
            </Card>

            <Card className="overflow-hidden">
              {/* Static map imagery would need a paid key and add a third-party
                  request to every page load; this states the location plainly. */}
              <div className="blueprint relative grid h-44 place-items-center bg-muted/40">
                <div className="text-center">
                  <MapPin className="mx-auto h-6 w-6 text-primary" aria-hidden />
                  <p className="mt-2 font-display font-semibold">{profile.location}</p>
                  <p className="text-xs text-muted-foreground">Working with clients worldwide</p>
                </div>
              </div>
            </Card>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <Card className="p-6 sm:p-7">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message} htmlFor="name">
                  <Input
                    id="name"
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    {...register('name')}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message} htmlFor="email">
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                    {...register('email')}
                  />
                </Field>
              </div>

              <Field label="Company" htmlFor="company" optional>
                <Input id="company" placeholder="Where you work" {...register('company')} />
              </Field>

              <Field label="Message" error={errors.message?.message} htmlFor="message">
                <Textarea
                  id="message"
                  placeholder="What are you building, and where is it stuck?"
                  aria-invalid={Boolean(errors.message)}
                  {...register('message')}
                />
              </Field>

              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" size="lg" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>

                <p role="status" aria-live="polite" className="text-sm">
                  {status === 'sent' && (
                    <span className="flex items-center gap-1.5 text-primary">
                      <Check className="h-4 w-4" aria-hidden />
                      Thanks — I&rsquo;ll be in touch.
                    </span>
                  )}
                  {status === 'error' && (
                    <span className="text-red-500">
                      Something went wrong. Email {profile.email} directly.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium">
        {label}
        {optional && <span className="ml-1 text-xs text-muted-foreground">optional</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
