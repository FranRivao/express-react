import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const URI = 'http://localhost:4000/blogs/';

const ShowBlogs = () => {
    const [blogs, setBlog] = useState([]);
    useEffect(() => {
        getBlogs();
    }, []);
    
    const getBlogs = async () => {
        const res = await axios.get(URI);
        await setBlog(res.data);
    }

    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`);
        await getBlogs();
    }

    return(
        <div className='container'>
            <div className="row">
                <div className="col">
                    <h3 className='my-4 text-center'><strong>Blogs list</strong></h3>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Título</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map(blog => (
                                <tr key={ blog.id }>
                                    <td>{ blog.title }</td>
                                    <td>{ blog.content }</td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className="btn btn-info me-2"><i className="fas fa-edit"></i></Link>
                                        <button onClick={() => deleteBlog(blog.id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ShowBlogs;