const PricingCard = () => {
  return (
    <div className="bg-base-200 w-80 rounded-2xl p-6">
      <h3 className="font-bold text-xl">Social Media Handling</h3>
      <h3 className="py-4">
        Starts from <br />
        <span className="text-green-600 text-3xl font-black">$10,000</span>{" "}
        /month
      </h3>
      <p>Includes</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
    </div>
  );
};

export default PricingCard;
