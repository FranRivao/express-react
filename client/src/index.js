import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateBlog from './blog/CreateBlog';
import EditBlog from './blog/EditBlog';
import ShowBlogs from './blog/ShowBlogs';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      	<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}> 
					<Route index element={<ShowBlogs />}/>
					<Route path="/create" element={<CreateBlog />}/>
					<Route path="/edit/:id" element={<EditBlog />}/>
				</Route>
			</Routes>
		</BrowserRouter>
  </React.StrictMode>
);
