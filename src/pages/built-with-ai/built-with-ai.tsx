import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { useScrollFade } from '@/hooks/useScrollFade';
import { ZvSkillChip } from '@/web-components/react/ZvSkillChip';

interface SectionProps {
  label: string;
  heading: string;
  children: ReactNode;
}

function Section({ label, heading, children }: SectionProps) {
  const { ref, isVisible } = useScrollFade(0.1);
  return (
    <div
      ref={ref}
      className={`py-12 md:py-16 border-b border-border transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
        {label}
      </p>
      <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6 md:mb-8">{heading}</h2>
      <div className="space-y-4 text-foreground font-light text-base md:text-lg leading-relaxed max-w-3xl">
        {children}
      </div>
    </div>
  );
}

export default function BuiltWithAI() {
  return (
    <div className="max-w-4xl mx-auto px-8 md:px-10 lg:px-12 pb-16">
      {/* Header */}
      <div className="py-12 md:py-16 lg:py-20 border-b border-border">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Meta
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
          Built with AI
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
          The honest story of how this portfolio was made — and what "vibe coding" actually means
          when you&apos;re doing it seriously.
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          {['React', 'TypeScript', 'Lit', 'Tailwind CSS'].map(t => (
            <ZvSkillChip key={t} label={t} variant="primary" />
          ))}
          <ZvSkillChip label="Claude" variant="ai" />
        </div>
      </div>

      <Section label="The setup" heading={'What "vibe coding" means here'}>
        <p>
          &ldquo;Vibe coded with Claude&rdquo; doesn&apos;t mean I described a portfolio and Claude
          wrote one. It means I used Claude as a pair programmer — someone with encyclopedic
          knowledge of React patterns, Tailwind v4, Lit web components, and TypeScript edge
          cases — and we built this together.
        </p>
        <p>
          The design decisions, the content, the &ldquo;does this feel right&rdquo; judgment
          calls: those were mine. Claude helped me think faster, avoid bad patterns, and stay in
          flow. That&apos;s a genuinely useful collaboration, and I want to describe it accurately
          rather than either over-claiming or hiding it.
        </p>
      </Section>

      <Section label="The process" heading="What Claude specifically helped with">
        <p>
          <strong className="font-normal">Architecture planning.</strong> Before writing any code,
          I described what I wanted and we designed the architecture in a planning session. The
          result was a specific, defensible structure — routes, data shapes, which components to
          build as Lit vs. React — that I reviewed and approved before implementation started.
        </p>
        <p>
          <strong className="font-normal">The Lit components.</strong> The three web
          components — the skill chip, the terminal typer, and the timeline entry — were designed
          and implemented with Claude based on clear specifications I provided. I chose what they
          should do; Claude knew the Lit API, the shadow DOM gotchas, and the CSS custom property
          patterns that make them themeable.
        </p>
        <p>
          <strong className="font-normal">Design tokens.</strong> The OKLCH color system and
          the new <code className="font-mono text-sm">--ai-accent</code> violet token came out of a
          conversation about how to make the &ldquo;AI era&rdquo; angle feel like a design detail,
          not a marketing claim.
        </p>
        <p>
          <strong className="font-normal">TypeScript accuracy.</strong> Catching type errors,
          prop interface shapes, and Lit&apos;s static properties pattern — Claude is a very fast
          TypeScript compiler with good taste.
        </p>
      </Section>

      <Section label="The distinction" heading="What I still own entirely">
        <p>
          Every word of content on this site is mine. The decision to write this page at all — to
          be transparent about the process rather than just slapping &ldquo;Built with Claude&rdquo;
          in the footer — is mine. The career narrative, the project write-ups, the framing of
          what I care about as an engineer: mine.
        </p>
        <p>
          The visual aesthetic choices — font weight, color restraint, the cursor spotlight effect,
          the &ldquo;considered minimalism&rdquo; direction — came from my taste and my opinions
          about what looks like a serious engineer&apos;s portfolio vs. a template. I reviewed
          everything Claude generated, pushed back when something felt wrong, and made calls about
          what to keep vs. what to redo.
        </p>
        <p>
          The Lit component architecture itself (why use web components, which three to build, why
          those three specifically) was my concept. Claude helped me articulate and execute it.
          There&apos;s a real difference between &ldquo;I had an idea and AI helped me ship
          it&rdquo; and &ldquo;AI had an idea and I typed it in,&rdquo; and I&apos;m firmly in the
          first camp.
        </p>
      </Section>

      <Section label="The point" heading="Why this matters for hiring">
        <p>
          Software engineering is changing. The engineers who thrive in the next decade will be the
          ones who can use AI as a serious tool — not a novelty, not a crutch, but a collaborator
          with different strengths and known weaknesses.
        </p>
        <p>
          This portfolio is evidence of that. I know how to spec a component, review generated
          code, catch the places where AI confidently gets things wrong, and own the final output.
          That&apos;s the skill that matters, and it&apos;s increasingly rare.
        </p>
        <p>
          If you want to see the planning session transcript, the architecture document, or the
          specific prompts I used — I&apos;m happy to share. Building in the open is part of the
          point.
        </p>
      </Section>

      {/* CTA */}
      <div className="py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          See it in the work
        </p>
        <p className="text-base md:text-lg text-foreground font-light mb-6 max-w-2xl">
          The portfolio itself is listed as a project in my work section. Claude is in the tech
          stack, the same as React and Tailwind.
        </p>
        <Link
          to="/work/zenia-villa-web"
          className="inline-flex items-center gap-2 text-base font-light text-muted-foreground hover:text-foreground transition-colors group"
        >
          View the portfolio project
          <ArrowUpRight
            size={16}
            className="opacity-70 group-hover:opacity-100 transition-opacity"
          />
        </Link>
      </div>
    </div>
  );
}
