import ContactButton from "@/components/ContactButton";
import ContentContainer from "@/components/ContentContainer";
import Heading from "@/components/Heading";

const AboutusPage = () => {
  return (
    <ContentContainer className="space-y-4 text-justify">
      <Heading>About Us</Heading>
      <p>
        We are a Digital Marketing firm. That&apos;s likely over simplified,
        but, its cleaner then a long list of description. We produce Excellent
        Websites, landing pages, Running ads in Google and Social medias,
        optimizing SEO, SMM by Collaborative explosion of Creativity fueled by a
        community of amazing Designers, Content writers and SEO optimizers.
      </p>
      <p>
        We love to hear your problems in marketing and Solving for Some numbers
        and your time. our mission is to make great marketing strategies, that
        can lead to greater innovation in marketing industry.
      </p>
      <p className="font-bold text-lg">Our Mission</p>
      <p>
        We believe that by combining our team with your business, gives you a
        almighty push for an infinite years in upward progress. Our mission is
        to make great marketing strategies that can lead to greater innovation
        in marketing industry
      </p>
      <div className="pt-6 flex-center">
        <ContactButton title="Contact us" />
      </div>
    </ContentContainer>
  );
};

export default AboutusPage;
