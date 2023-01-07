import React from "react";
import FeaturesCard from "./FeaturesCard";
import Router, { useRouter } from "next/router";
const ProductFeatures = ({ features, query }) => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-lg mt-6 p-1 md:p-6 w-full shadow">
      <div className="md:flex md:items-center md:justify-between mb-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 ml-4">
          Features for Product Models
        </h3>
        <button
          type="button"
          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() =>
            router.push(`${router.query.product_key}/create-feature`)
          }
        >
          Create new feature
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {features.features?.map((feature) => (
          <FeaturesCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;
