import { CheckCircle2 } from "lucide-react";

const functions = [
  "Incident/ticketing module for customer support",
  "Expenses module for financial management",
  "Document module to create quotations, invoices, and receipts",
  "IP, PPPOE and Hotspot management functions",
  "Support for multiple Mikrotik routers in one account",
  "Remote Mikrotik router access with free public IP",
  "Integrated with M-PESA and other payment methods",
  "Integrated with most Bulk SMS gateways",
  "Automatic disconnection and reconnection of client accounts",
  "Automatic email and SMS payment reminders",
  "Complete payment transaction history for all routers",
  "Automatic Mikrotik config backup to device and servers",
  "Basic troubleshooting: view online clients, ping routers",
  "View router logs and data consumption per client",
  "System event logs for audit trail"
];

const SystemFunctions = () => {
  return (
    <section className="py-20 md:py-28" id="functions">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
              Comprehensive System Functions
            </h2>
            <p className="text-lg text-muted-foreground">
              All the tools you need to run a successful ISP business
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {functions.map((func, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4 transition-all duration-300 hover:border-secondary/30 hover:shadow-md"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-card-foreground">{func}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemFunctions;
