import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ title, description, hover, button, icon, bgColor, textColor, iconColor, onViewClick, onEditClick, viewContent, editContent, weatherForecast }) {
  const cardStyles = {
    bgColor: bgColor || "bg-blue-200",
    textColor: textColor || "text-blue-600",
    iconColor: iconColor || "text-blue-600",
  };

  return (
    <div className="w-1/2 opacity-90 hover:opacity-100">
      <div className={`rounded-md p-2 mb-2 ${cardStyles.bgColor}`}>
        <p className={`font-semibold ${cardStyles.textColor}`}>
          <FontAwesomeIcon
            icon={icon}
            className="mr-2"
            style={{ color: cardStyles.iconColor }}
          />
          {title}
        </p>
        <p className="text-sm text-zinc-600">{description}</p>
        <div className="flex justify-end">
          {/* View Button  */}
          {viewContent && viewContent}
          {/* Edit Button */}
          {editContent && editContent}
        </div>

        {/* Weather Forecast */}
        {weatherForecast && (
          <div className="mt-4">
            <p className="text-sm font-semibold text-orange-700">
              Weather Forecast
            </p>
            <div className="flex gap-2 overflow-x-scroll">
              {weatherForecast.map((dayForecast, index) => (
                <div
                  key={index}
                  className="flex gap-1 items-center bg-gray-200 p-2 rounded-md text-zinc-700"
                >
                  <div className="text-sm font-semibold ">
                    {dayForecast.day}
                  </div>
                  <div>{dayForecast.icon}</div>
                  <div className="text-sm">{dayForecast.temperature}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}










