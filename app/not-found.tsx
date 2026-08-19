import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found | Faith Impact Forum",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-sky">
        404
      </p>
      <h1 className="font-display text-3xl font-semibold text-slate-900">
        Page not found
      </h1>
      <p className="max-w-md text-sm text-slate-600">
        The page you are looking for does not exist or has moved.
      </p>
      <Button asChild variant="dark">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
