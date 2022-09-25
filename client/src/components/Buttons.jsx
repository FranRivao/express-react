import { Link } from "react-router-dom";

const button = {};

button.SentFormBtn = (data) => {
    return (
        <div className="form-group d-flex justify-content-end">
            <button type='submit' className="btn btn-primary col-md-2"><strong>{data.text}</strong></button>
        </div>
    );
}   

button.GoBackBtn = (data) => {
    return (
        <Link to="/" className="btn btn-secondary"><strong>{data.text}</strong></Link>
    );
}

export default button;