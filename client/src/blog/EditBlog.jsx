import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:4000/blogs/';

const EditBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const {id} = useParams();

    const update = async e => {
        e.preventDefault();
        await axios.put(URI+id, {title: title, content: content});
        navigate('/');
    }

    useEffect(() => {
        getBlogById();
    }, []);

    const getBlogById = async () => {
        const res = await axios.get(URI+id);
        console.log(res);
        setTitle(res.data[0].title);
        setContent(res.data[0].content);
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col ">
                    <h3>Editar blog</h3>
                    <form onSubmit={update}>
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
                            <button type='submit' className="btn btn-primary">Editar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default EditBlog;