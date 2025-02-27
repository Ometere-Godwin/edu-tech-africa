import { InfiniteScroll } from "../components/ui/infinite-scroll";
import Image from "next/image";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Microsoft", logo: "/assests/etranzact.jpg" },
  { name: "Google", logo: "/assests/Mastercard-icon.png" },
  { name: "Apple", logo: "/assests/glo-icon.png" },
  { name: "Amazon", logo: "/assests/gtb-icon.png" },
  { name: "Meta", logo: "/assests/mtn-new-logo.svg " },
  { name: "Meta", logo: "/assests/proconnect.jpg " },
  { name: "Meta", logo: "/assests/union-bank.png " },
  { name: "Meta", logo: "/assests/vanguard-icon.jpg" },
  { name: "Meta", logo: "/assests/sportybet.jpg " },
  // Add more companies as needed
];

function CompanyLogo({ name, logo }: Company) {
  return (
    <div className="flex flex-col items-center mx-8 group">
      <div className="w-24 h-24 flex items-center justify-center  transition-all duration-200 ">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={150}
          height={150}
          className="w-full h-full object-contain transition-opacity"
        />
      </div>
      {/* <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
        {name}
      </span> */}
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

        <InfiniteScroll direction="left" speed="fast" className="py-8">
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
