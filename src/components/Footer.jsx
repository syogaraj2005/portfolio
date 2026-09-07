import { profile } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React + Tailwind, deployed on Netlify</p>
      </div>
    </footer>
  );
}
