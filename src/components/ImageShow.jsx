import '../style/layouts/ImageShow.scss'

function ImageShow({ image }) {

    return(
        <div>
            <div className="image-box">
                <img className='api-image' src={image.urls.small} alt={image.alt_description} />
            </div>
        </div>
    )
}

export default ImageShow;