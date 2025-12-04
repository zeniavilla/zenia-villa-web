function Footer() {
  return (
    <footer className="w-full mx-auto px-8 py-12 border-t border-border dark:border-white/10">
      <div className="flex flex-col items-center gap-1.5 text-sm">
        <p className="font-light text-muted-foreground dark:text-gray-400">
          © {new Date().getFullYear()} Zenia Villa
        </p>
        <p className="font-light text-muted-foreground dark:text-gray-400">
          Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}

export default Footer;
