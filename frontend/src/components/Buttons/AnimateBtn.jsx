import "./revbtn.css";

const AnimateBtn = (props) => {
    return (
        <div className="link-line">
            <a href={props.href || "#"} target={props.href ? "_blank" : undefined} rel={props.href ? "noreferrer" : undefined} className="rev-link rev-top text-[12px]">{props.btnName}</a>
            <a href={props.href || "#"} target={props.href ? "_blank" : undefined} rel={props.href ? "noreferrer" : undefined} className="rev-link text-[12px]">{props.btnName}</a>
        </div>
    )
}

export default AnimateBtn
