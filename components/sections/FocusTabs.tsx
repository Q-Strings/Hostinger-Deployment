"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FocusTabs() {
  return (
    <Tabs defaultValue="strategy" className="w-full">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="strategy">Strategic Focus</TabsTrigger>
        <TabsTrigger value="impact">Impact Sectors</TabsTrigger>
        <TabsTrigger value="partnership">Partnership Model</TabsTrigger>
      </TabsList>
      <TabsContent value="strategy">
        <Card>
          <CardHeader>
            <CardTitle>Elevating FBOs as Co-Creators</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              The forum centers FBOs as trusted delivery partners, integrating
              evidence, capital, and policy alignment for long-term systems change.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="impact">
        <Card>
          <CardHeader>
            <CardTitle>Education, Health, Livelihoods & Resilience</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              We spotlight collaborative solutions across education, health,
              humanitarian response, climate resilience, and economic inclusion.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="partnership">
        <Card>
          <CardHeader>
            <CardTitle>Multi-Sector Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Our model connects faith networks, philanthropy support organisations,
              research institutions, policymakers, and private sector partners.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
