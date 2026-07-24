export const profile = {
  name: 'Md. Ridwanur Rahman Mazumder',
  shortName: 'Ridwan Supon',
  title: 'Software Business Analyst',
  company: 'Appifly BD Limited',
  location: 'Dhaka, Bangladesh',
  email: 'ridwansupon@gmail.com',
  phone: '+8801871032697',
  whatsapp: '+8801871032697',
  github: 'https://github.com/RidwanSupon',
  linkedin: 'https://www.linkedin.com/in/md-ridwanur-r-mazumder-4a8298155/',

  headline: 'Turning business complexity into software that ships.',
  subheadline:
    'Software Business Analyst working across ERP, SaaS products, and financial systems — translating what a business needs into specifications engineering teams can build without guesswork.',

  /** Rotating phrases in the hero. Keep each under about forty characters. */
  rotatingRoles: [
    'Requirement Engineering',
    'ERP & SaaS Product Planning',
    'Business Process Analysis',
    'SRS · BRD · FRD',
    'Digital Transformation',
  ],

  /** Availability shown next to the contact form. */
  availability: 'Open to consulting and full-time roles',

  /**
   * Place a PDF at public/resume.pdf to enable the download button.
   * While the file is missing the button links to the contact section instead,
   * so the site never offers a download that 404s.
   */
  resumePath: '/resume.pdf',
  resumeAvailable: false,
} as const;

export const socials = [
  { label: 'GitHub', href: profile.github, icon: 'github' as const },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' as const },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' as const },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`,
    icon: 'whatsapp' as const,
  },
];
