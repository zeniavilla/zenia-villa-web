function Footer() {
  return (
    <footer className="w-full mx-auto px-8 py-16 border-t border-gray-200">
      <div className="flex flex-col items-center gap-1.5 text-sm">
        <p className="font-light text-gray-600">
          © {new Date().getFullYear()} Zenia Villa
        </p>
        <p className="font-light text-gray-600">
          Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}

export default Footer;
