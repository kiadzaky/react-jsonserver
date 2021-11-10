import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const navigate = useNavigate();
	const saveProduct = async (e) => {
		e.preventDefault();
		const product = { name, price };
		await fetch('http://localhost:6969/products', {
			method: 'POST',
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
			<form onSubmit={saveProduct}>
				<div className="field">
					<label className="label">Nama Produk</label>
					<div className="control">
						<input
							className="input"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						></input>
					</div>
				</div>
				<div className="field">
					<label className="label">Harga Produk</label>
					<div className="control">
						<input
							type="number"
							className="input"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							required
						></input>
					</div>
				</div>
				<button className="button is-primary">Tambah Produk</button>
				<a href="/" className="button is-danger">
					Kembali
				</a>
			</form>
		</div>
	);
};

export default AddProduct;
