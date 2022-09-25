import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CreateBlog from './blog/CreateBlog';
import EditBlog from './blog/EditBlog';
import ShowBlogs from './blog/ShowBlogs';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='min-vh-100'>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<ShowBlogs />} />
				<Route exact path="/create" element={<CreateBlog />} />
				<Route exact path="/edit/:id" element={<EditBlog />} />
			</Routes>
		</div>
	)
}

export default App