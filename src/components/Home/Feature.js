export default function Feature({ image, alt, title, text }) {
  return (
    <div className="w-full md:w-1/2 px-4 mb-8">
      <div className="flex flex-col items-center">
        {/* Add your icon here */}
        <img src={image} alt={alt} className="w-20 h-20 mb-4" />

        {/* Add your feature title here */}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        {/* Add your text here  */}
        <p className="text-gray-700 text-center">{text}</p>
      </div>
    </div>
  );
}