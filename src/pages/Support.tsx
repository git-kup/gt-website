
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionContainer, Heading, Badge } from "@/components/ui-components";

const Support = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16">
        <SectionContainer>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="accent" className="mb-4">Support</Badge>
            <Heading as="h1">Remote Support Access</Heading>
            <p className="text-foreground/80 mt-4">
              Connect with our support team instantly with our remote access tool.
              Use the embedded portal below to start a support session.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl h-[400px] border border-border rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://goldtech.screenconnect.com/?theme=embedded" 
                title="Support Portal"
                className="w-full h-full"
              />
            </div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
};

export default Support;
