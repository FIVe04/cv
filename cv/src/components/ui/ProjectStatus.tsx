import { useEffect, useState } from "react";
import "./ProjectStatus.css"


const ProjectStatus: React.FC<{ projectStatus: string }> = ({ projectStatus }) => {

    const [gradientColor, setGradientColor] = useState<string>("");

    useEffect(()=>{
        switch (projectStatus) {
            case "in progress":
                setGradientColor("blue");
                break;
            case  "on pause":
                setGradientColor("orange");
                break;
            case "done":
                setGradientColor("green");
                break;
            default:
                setGradientColor("white");
        }

    },[gradientColor])

    return (
        <div
        className="project-status-outer"
        style={{ "--gradient-color": gradientColor } as React.CSSProperties}
        >
            <h2 className="status-text">{projectStatus}</h2>
        </div>
    );
};

export default ProjectStatus;