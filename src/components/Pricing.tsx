import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingTiers = [
  { users: "0-50 users", price: "1,000", popular: false },
  { users: "0-100 users", price: "2,000", popular: true },
  { users: "100-200 users", price: "3,500", popular: false },
  { users: "200-300 users", price: "5,500", popular: false },
  { users: "300-400 users", price: "7,500", popular: false },
  { users: "400-500 users", price: "9,500", popular: false },
  { users: "1000 users", price: "19,500", popular: false }
];

const Pricing = () => {
  return (
    <section className="bg-muted/30 py-20 md:py-28" id="pricing">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            PPPOE & Static IP packages - Choose the plan that fits your business
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:shadow-lg ${
                tier.popular 
                  ? "border-secondary shadow-lg scale-105" 
                  : "border-border/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[image:var(--gradient-accent)] px-4 py-1 text-sm font-semibold text-secondary-foreground">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{tier.users}</CardTitle>
                <CardDescription className="mt-4">
                  <span className="text-3xl font-bold text-foreground">KSh {tier.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* ✅ Updated: Button now links to #cta */}
                <Button 
                  className="w-full" 
                  variant={tier.popular ? "hero" : "outline"}
                  asChild
                >
                  <a href="#cta">Get Started</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-secondary/20 bg-[image:var(--gradient-accent)] text-secondary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">What's Included in All Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Free Installation",
                "Multiple Mikrotik Routers",
                "M-PESA Integration",
                "Bulk SMS Gateway",
                "Automated Billing",
                "Email & SMS Reminders",
                "Remote Router Access",
                "Automatic Backups",
                "Customer Portal",
                "Payment History",
                "Incident Management",
                "Document Generation"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-accent">
            🎉 Special Offer: Free Hotspot for 0-100 users subscription!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;