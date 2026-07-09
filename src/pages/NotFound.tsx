import { Link } from "react-router-dom";
import PageTransition from "../components/layout/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-[80svh] flex items-center justify-center py-32">
        <div className="container-editorial text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-wheat mb-8">404</p>
          <h1 className="font-serif text-display-lg text-cream max-w-[16ch] mx-auto text-balance leading-[0.98]">
            This page has <span className="italic text-wheatLight">wandered off.</span>
          </h1>
          <p className="mt-10 text-mist text-lg">
            Try one of the paths that&rsquo;s actually paved.
          </p>
          <div className="mt-14">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-ink bg-wheat px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-wheatLight transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
