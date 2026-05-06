export default function Footer() {
  return (
    <footer className="hairline-t py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 font-mono text-xs text-[var(--color-fg-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} kyle hurst · sandy, ut
        </p>
        <p>built fast · debugged faster · still no light mode</p>
      </div>
    </footer>
  );
}
