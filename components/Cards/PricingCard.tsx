interface Props {
  service: string;
  startPrice: String;
  offerings: string[];
}

const PricingCard = ({ service, startPrice, offerings }: Props) => {
  return (
    <div className="bg-base-200 w-[80%] md:w-80 rounded-2xl p-6">
      <h3 className="font-bold text-xl">{service}</h3>
      <h3 className="py-4">
        Starts from <br />
        <span className="text-green-600 text-3xl font-bold">
          ₹{startPrice}
        </span>{" "}
        {service !== "Website Designing" && <span>/month</span>}
      </h3>
      <p className="font-medium text-lg pb-1">Includes:</p>
      <ul className="list-disc list-inside space-y-2 font-medium">
        {offerings.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
