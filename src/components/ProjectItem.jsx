export default function ProjectItem(props) {
    return (
        <div className="item">
            <img src={props.imageUrl} alt="" />
            <div className="down-content">
                <h4>{props.title}</h4>
                <a href="#"><i className="fa fa-link"></i></a>
            </div>
        </div>
    );
}