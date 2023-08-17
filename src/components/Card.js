import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ title, description, hover, button, icon, bgColor, textColor, iconColor }) {
    const cardStyles = {
        bgColor: bgColor || "bg-blue-200",
        textColor: textColor || "text-blue-600",
        iconColor: iconColor || "text-blue-600",
    }
  return (
    <div className="w-1/2 hover:opacity-80">
      <div className={`rounded-md p-2 mb-2 ${cardStyles.bgColor}`}>
        <p className={`font-semibold ${cardStyles.textColor}`}>
          <FontAwesomeIcon icon={icon} className="mr-2" 
          style={{color: cardStyles.iconColor}} />
          {title}
        </p>
        <p className="text-sm text-zinc-600">{description}</p>
      </div>
    </div>
  );
}
