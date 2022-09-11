import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <div className="row">
                <div className="col ">
                    <h3>Crear blog</h3>
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
                        <div className="form-group">
                            <button type='submit' className="btn btn-primary">Crear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog;
