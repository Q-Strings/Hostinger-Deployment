import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EventData } from "@/lib/data/events-data";

export function EventCard({ event }: { event: EventData }) {
  return (
    <Card className="h-full overflow-hidden bg-white/90">
      <div className="relative h-44">
        <Image
          src={event.image.card}
          alt={event.image.alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/5 to-transparent" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky">
          {event.date}
        </div>
        <CardTitle className="font-display text-2xl">{event.title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="h-4 w-4" />
          {event.location}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">{event.summary}</p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button asChild variant="outline" className="rounded-full">
          <Link href={`/events/${event.slug}`}>
            Learn More
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
