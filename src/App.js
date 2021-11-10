import { BrowserRouter as BR, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
function App() {
	return (
		<div className="container">
			<BR>
				<Routes>
					<Route exact path="/" element={<ProductList />}></Route>
					<Route path="/addproduct" element={<AddProduct />}></Route>
					<Route path="/editproduct/:id" element={<EditProduct />}></Route>
				</Routes>
			</BR>
		</div>
	);
}

export default App;
