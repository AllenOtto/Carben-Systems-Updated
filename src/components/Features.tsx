import { Activity, Bell, CreditCard, Database, FileText, Globe, MessageSquare, Shield, Users, Wifi } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Wifi,
    title: "Multi-Protocol Support",
    description: "Complete support for PPPOE, Static IP, and Hotspot configurations with seamless management."
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Comprehensive user management with automated disconnection and reconnection based on payment status."
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Integrated with M-PESA and other payment methods for seamless transaction processing."
  },
  {
    icon: MessageSquare,
    title: "SMS & Email Notifications",
    description: "Automatic reminders and notifications via SMS and email for payment due dates and account updates."
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Create professional quotations, invoices, and receipts directly from the system."
  },
  {
    icon: Activity,
    title: "Ticketing System",
    description: "Built-in incident and ticketing module for efficient customer support management."
  },
  {
    icon: Database,
    title: "Expense Tracking",
    description: "Comprehensive expense module to track and manage all business expenditures."
  },
  {
    icon: Globe,
    title: "Remote Access",
    description: "Access your Mikrotik routers remotely with our free public IP service."
  },
  {
    icon: Shield,
    title: "Auto Backup",
    description: "Automatic Mikrotik configuration backup to both your device and our secure servers."
  }
];

const Features = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Everything You Need to Manage Your ISP
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Powerful features designed specifically for Internet Service Providers
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-border/50 bg-[image:var(--gradient-card)] transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:border-primary/20"
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-transform group-hover:scale-110">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
