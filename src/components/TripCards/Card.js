import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ title, description, hover, button, icon, bgColor, textColor, iconColor, onViewClick, onEditClick, popupContent }) {
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
        {/* View Button  */}
        {popupContent && popupContent}

        {/* Edit Button */}
        {onEditClick && (
          <button
            className="bg-transparent border-2  px-2 py-1 rounded ml-3 hover:bg-blue-200 hover:text-blue-600 transition-colors"
            onClick={onEditClick}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
