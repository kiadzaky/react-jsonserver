import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const EditProduct = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	const getProductById = async () => {
		// const response = await fetch('http://localhost:6969/products/' + id);
		// bisa pakai ini
		const response = await fetch(`http://localhost:6969/products/${id}`);

		const data = await response.json();
		setName(data.name);
		setPrice(data.price);
	};
	useEffect(() => {
		getProductById();
	}, []);
	const updateProduct = async (e) => {
		e.preventDefault();
		const product = { name, price };
		await fetch(`http://localhost:6969/products/${id}`, {
			method: 'PUT',
			body: JSON.stringify(product),
			headers: {
				'Content-type': 'application/json',
			},
		});
		navigate('/');
	};
	return (
		<div>
			<h1 className="title">Tambah Data</h1>
			<form onSubmit={updateProduct}>
				<div className="field">
					<label className="label">Nama Produk</label>
					<div className="control">
						<input
							className="input"
							value={name}
							onChange={(e) => setName(e.target.value)}
						></input>
					</div>
				</div>
				<div className="field">
					<label className="label">Harga Produk</label>
					<div className="control">
						<input
							type="number "
							className="input"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						></input>
					</div>
				</div>
				<button className="button is-primary">Update Produk</button>
			</form>
		</div>
	);
};

export default EditProduct;
