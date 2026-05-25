import { Building2, Pickaxe, Factory, Warehouse, Wrench, HardHat } from "lucide-react"

const industries = [
  {
    icon: Building2,
    title: "Construction",
    description: "Safety equipment for building sites, road works, and civil engineering projects.",
  },
  {
    icon: Pickaxe,
    title: "Mining",
    description: "Specialized PPE for underground and surface mining operations.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Protective gear for factory floors, assembly lines, and production facilities.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Safety solutions for logistics centers, distribution hubs, and storage facilities.",
  },
  {
    icon: Wrench,
    title: "Engineering",
    description: "PPE for mechanical, electrical, and industrial engineering projects.",
  },
  {
    icon: HardHat,
    title: "General Contracting",
    description: "Comprehensive safety supplies for contractors and sub-contractors.",
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Safety Solutions Across Sectors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            We understand the unique safety requirements of each industry. Our team provides tailored PPE solutions that meet sector-specific regulations and standards.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative flex aspect-[16/9] items-center justify-center bg-foreground">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: "linear-gradient(135deg, transparent 0 45%, white 45% 50%, transparent 50% 100%)",
                  backgroundSize: "28px 28px",
                }} />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                  <industry.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
