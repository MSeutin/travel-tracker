import Feature from "./Feature";
import communityImage from "../../images/community.svg";
import budgetImage from "../../images/budget.svg";
import packingImage from "../../images/packing.svg";
import metricsImage from "../../images/metrics.svg";

export default function Features() {
  return (
    <section className="py-16 bg-gray-100 text-zinc-800">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
        <div className="flex flex-wrap -mx-4">
          {/* FEATURE 1  */}
          <Feature
            image={communityImage}
            alt="Community Driven Recommendations Icon"
            title="Community Driven Recommendations"
            text="Get personalized destination suggestions based on your preferences and interests."
          />
          {/* FEATURE 2  */}
          <Feature
            image={budgetImage}
            alt="Budget Icon"
            title="Budget Creation & Tracking"
            text="Get personalized budget suggestions based on your hotel, flight, and lifestyle preferences."
          />
          {/* FEATURE 3 */}
          <Feature
            image={packingImage}
            alt="Packing Icon"
            title="Packing Lists"
            text="Get the default packing suggestions or alter it to fit your needs."
          />
          {/* FEATURE 4 */}
          {/* title: "Destination Metrics"  */}
          {/* text: "Keep track of local currency, weather, and more." */}
          <Feature
            image={metricsImage}
            alt="Destination Icon"
            title="Destination Metrics"
            text="Keep track of local currency, weather, and more."
          />
        </div>
      </div>
    </section>
  );
}
