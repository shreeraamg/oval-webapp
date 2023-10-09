import Image from "next/image";

type Props = {
  imageSrc: string;
  company: string;
  testimonial: string;
};

const TestimonialCard = ({ imageSrc, company, testimonial }: Props) => {
  return (
    <div className="card min-w-[24rem] bg-black text-neutral-content">
      <div className="card-body items-center text-center">
        <Image src={imageSrc} width={100} height={100} alt={company} />
        <p className="text-justify">{testimonial}</p>
        <div className="card-actions justify-end">
          <p>{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
