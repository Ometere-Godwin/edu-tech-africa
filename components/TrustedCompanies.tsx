import { InfiniteScroll } from "../components/ui/infinite-scroll";
import Image from "next/image";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Microsoft", logo: "/images/companies/microsoft.png" },
  { name: "Google", logo: "/images/companies/google.png" },
  { name: "Apple", logo: "/images/companies/apple.png" },
  { name: "Amazon", logo: "/images/companies/amazon.png" },
  { name: "Meta", logo: "/images/companies/meta.png" },
  // Add more companies as needed
];

function CompanyLogo({ name, logo }: Company) {
  return (
    <div className="flex flex-col items-center mx-8 group">
      <div className="w-24 h-24 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm transition-all duration-200 group-hover:shadow-md">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={64}
          height={64}
          className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
        {name}
      </span>
    </div>
  );
}

export default function TrustedCompanies() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600">
            Join thousands of companies worldwide that trust our platform
          </p>
        </div>

        <InfiniteScroll direction="left" speed="slow" className="py-8">
          {companies.map((company) => (
            <CompanyLogo
              key={company.name}
              name={company.name}
              logo={company.logo}
            />
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
}
