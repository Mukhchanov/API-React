import { useState } from 'react';
import './style/layouts/App.scss';
import searchImages from "./api";
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {

    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {

        const result = await searchImages(term);
        setImages(result);
    }

    return (

    <section id='main-page' className='d-flex justify-content-center'>
        <div className='container'>
            <div className='row search-row'>
                <div className='image-search col-12'>
                    <SearchBar userSubmit={handleSubmit} />
                </div>
            </div>
            <div className="row list-row">
                <div className="col-12">
                    <ImageList images={images} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default App
