import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Router, MessageSquare } from "lucide-react";

const requirements = [
  {
    icon: Building2,
    title: "Payment Gateway",
    description: "Safaricom Paybill/Till number, SACCO account, or bank account for payment processing"
  },
  {
    icon: Router,
    title: "Mikrotik Router",
    description: "One or more Mikrotik routers for network management and client connectivity"
  },
  {
    icon: MessageSquare,
    title: "Bulk SMS Service",
    description: "Bulk SMS gateway account for automated customer notifications and reminders"
  }
];

const Requirements = () => {
  return (
    <section className="bg-muted/30 py-20 md:py-28" id="requirements">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            What You Need to Get Started
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple requirements to begin managing your ISP business
          </p>
        </div>
        
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {requirements.map((req, index) => (
            <Card 
              key={index}
              className="border-border/50 text-center transition-all duration-300 hover:shadow-lg hover:border-secondary/30"
            >
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <req.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">{req.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{req.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Requirements;
