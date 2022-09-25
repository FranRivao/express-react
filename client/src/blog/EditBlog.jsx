import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Components
import button from '../components/Buttons';

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
        //eslint-disable-next-line
    },[]);

    const getBlogById = async () => {
        const res = await axios.get(URI+id);
        setTitle(res.data[0].title);
        setContent(res.data[0].content);
    }

    return (
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12">
                    <div className="card mt-4">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h4 className='m-0 p-0'><strong>Editar blog</strong></h4>
                            <button.GoBackBtn text="Volver" />
                        </div>
                        <div className="card-body">
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
                                <button.SentFormBtn text="Editar" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EditBlog;