// @ts-ignore
export const FeatureItem = ({icon,iconAlt, title, description} : {icon: string, iconAlt: string, title: string, description: string})   => {
    return (
        <div className="feature-item">
            <img src={icon} alt={iconAlt} className="feature-icon"/>
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    )
}