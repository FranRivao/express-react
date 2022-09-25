import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import button from '../components/Buttons';


const URI = 'http://localhost:4000/blogs/';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, {title: title, content: content});
        navigate('/');
    }

    return (
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12">
                    <div className="card mt-4">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h4 className='m-0 p-0'><strong>Crear blog</strong></h4>
                            <button.GoBackBtn text="Volver" />
                        </div>
                        <div className="card-body">
                            <form onSubmit={store}>
                                <div className="form-group mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input 
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        type="text" className="form-control" id="title" 
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="content" className="form-label">Content</label>
                                    <input 
                                        value={content}
                                        onChange={e => setContent(e.target.value)}
                                        type="text" className="form-control" id="content" 
                                    />
                                </div>
                                <button.SentFormBtn text="Crear" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog;
