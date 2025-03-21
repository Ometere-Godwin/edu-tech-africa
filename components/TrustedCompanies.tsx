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
  { name: "mtn", logo: "/assests/mtn.png " },
  { name: "Meta", logo: "/assests/proconnect.jpg " },
  { name: "Meta", logo: "/assests/union-bank.png " },
  { name: "Meta", logo: "/assests/vanguard-icon.jpg" },
  { name: "sporty", logo: "/assests/sporty.png " },
];

function CompanyLogo({ name, logo }: Company) {
  return (
    <div className="relative flex items-center justify-center mx-6 sm:mx-8 group">
      <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transform transition-all duration-300 hover:scale-105">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={200}
          height={200}
          className="w-full h-full object-contain filter contrast-125"
          quality={100}
          loading="eager"
          priority={true}
        />
      </div>
    </div>
  );
}

export default function TrustedCompanies() {
  return (
    <section className="py-12 sm:py-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Join thousands of companies worldwide that trust our platform
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 w-32 h-full z-10" />
          <InfiniteScroll 
            direction="left" 
            speed="fast" 
            className="py-4"
          >
            {[...companies, ...companies].map((company, index) => (
              <CompanyLogo
                key={`${company.name}-${index}`}
                name={company.name}
                logo={company.logo}
              />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </section>
  );
}
