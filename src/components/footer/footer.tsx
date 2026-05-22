import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="w-full mx-auto px-8 py-12 border-t border-border dark:border-white/10">
      <div className="flex flex-col items-center gap-1.5 text-sm">
        <p className="font-light text-muted-foreground dark:text-gray-400">
          © {new Date().getFullYear()} Zenia Villa
        </p>
        <p className="font-light text-muted-foreground dark:text-gray-400">
          Built with React, Lit & Tailwind ·{' '}
          <Link
            to="/built-with-ai"
            className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            Vibe coded with Claude
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
