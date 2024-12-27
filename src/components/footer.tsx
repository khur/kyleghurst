export default function Footer() {
  return (
    <footer className="py-6 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-600 dark:text-slate-300">
          © {new Date().getFullYear()} Kyle Hurst. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
