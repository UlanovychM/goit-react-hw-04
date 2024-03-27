import { useState, useEffect, useRef } from 'react';
import fetchImageApi from '../services/gallery-api';
import { Toaster } from 'react-hot-toast';
import css from './App.module.css';

import SearchBar from '../SearchBar/SearchBox';
import Modal from 'react-modal';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);
	const [valueSearch, setValueSearch] = useState('');
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const [loadBtn, setLoadBtn] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState({});

	useEffect(() => {
		Modal.setAppElement('#root');
	}, []);

	const imageRef = useRef();

	const handleScroll = () => {
		if (!imageRef.current) {
			return;
		}

		if (page > 1) {
			const backdown = imageRef.current.getBoundingClientRect();
			const y = backdown.height * 2.5;

			window.scrollTo({
				top: y,
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	useEffect(() => {
		handleScroll();
	}, [images]);

	useEffect(() => {
		if (valueSearch.trim() === '') {
			return;
		}
		const getData = async () => {
			try {
				setLoader(true);
				setError(false);
				const { data, total_pages } = await fetchImageApi(valueSearch, page);
				setImages(prevData => {
					return [...prevData, ...data];
				});
				if (data.length > 0 || total_pages > 12) {
					setLoadBtn(true);
				}
			} catch (e) {
				setError(true);
				setLoadBtn(false);
			} finally {
				setLoader(false);
			}
		};

		getData();
	}, [page, valueSearch]);

	const handleShowMore = () => {
		setPage(page + 1);
	};

	const handelSearch = value => {
		setValueSearch(value);
		setPage(1);
		setImages([]);

		if (value.trim() === '') {
			setLoadBtn(false);
		}
	};

	const openModal = image => {
		setIsOpen(true);
		setSelectedImage(image);
	};
	const closeModal = () => setIsOpen(false);

	return (
		<>
			<div className={css.container}>
				<SearchBar onSearch={handelSearch} />
				{loader && <Loader />}

				{images.length > 0 && (
					<ImageGallery images={images} onOpen={openModal} ref={imageRef} />
				)}
				{selectedImage.urls && (
					<ImageModal
						isOpen={isOpen}
						onClose={closeModal}
						data={selectedImage}
					/>
				)}
				{error && <ErrorMessage />}
				{loadBtn && <LoadMoreBtn onLoad={handleShowMore} />}
				<Toaster position='top-right' />
			</div>
		</>
	);
}

export default App;
