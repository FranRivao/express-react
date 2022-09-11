import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateBlog from './blog/CreateBlog';
import EditBlog from './blog/EditBlog';
import ShowBlogs from './blog/ShowBlogs';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ShowBlogs />}/>
					<Route path="/create" element={<CreateBlog />}/>
					<Route path="/edit/:id" element={<EditBlog />}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App