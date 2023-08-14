import adventureImage from "../../images/adventure1.svg";

export default function Features() {
  return (
    <section className="py-16 bg-gray-100 text-zinc-800">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
        <div className="flex flex-wrap -mx-4">
          {/* FEATURE 1  */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="flex items-start">
              <div className="mr-4">
                {/* Add your icon here */}
                <img
                  src={adventureImage}
                  alt="Adventure Icon"
                  className="w-20 h-20"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Destination Suggestions
                </h3>
                <p className="text-gray-700">
                  Get personalized destination suggestions based on your
                  preferences and interests.
                </p>
              </div>
            </div>
          </div>
          {/* FEATURE 2  */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="flex items-start">
              <div className="mr-4">
                {/* Add your icon here */}
                <img
                  src={adventureImage}
                  alt="Adventure Icon"
                  className="w-20 h-20"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Destination Suggestions
                </h3>
                <p className="text-gray-700">
                  Get personalized destination suggestions based on your
                  preferences and interests.
                </p>
              </div>
            </div>
          </div>
          {/* FEATURE 3 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="flex items-start">
              <div className="mr-4">
                {/* Add your icon here */}
                <img
                  src={adventureImage}
                  alt="Adventure Icon"
                  className="w-20 h-20"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Destination Suggestions
                </h3>
                <p className="text-gray-700">
                  Get personalized destination suggestions based on your
                  preferences and interests.
                </p>
              </div>
            </div>
          </div>
          {/* FEATURE 4 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="flex items-start">
              <div className="mr-4">
                {/* Add your icon here */}
                <img
                  src={adventureImage}
                  alt="Adventure Icon"
                  className="w-20 h-20"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Destination Suggestions
                </h3>
                <p className="text-gray-700">
                  Get personalized destination suggestions based on your
                  preferences and interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
