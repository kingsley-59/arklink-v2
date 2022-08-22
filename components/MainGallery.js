import Image from 'next/image';
import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'

const Images = [
    // {name: '', src: require('../assets/images/pexel-bathroom-1.jpg')},
    {name: '', src: require('../assets/images/pexel-bathroom-2.jpg')},
    {name: '', src: require('../assets/images/pexel-bathroom-3.jpg')},
    // {name: '', src: require('../assets/images/pexel-bathroom-4.jpg')},
    // {name: '', src: require('../assets/images/pexel-doors-1.jpg')},
    {name: '', src: require('../assets/images/pexel-doors-2.jpg')},
    {name: '', src: require('../assets/images/pexel-doors-3.jpg')},
    // {name: '', src: require('../assets/images/pexel-doors-4.jpg')},
    {name: '', src: require('../assets/images/pexel-tiles-1.jpg')},
    {name: '', src: require('../assets/images/pexel-tiles-2.jpg')},
    {name: '', src: require('../assets/images/pexel-tiles-3.jpg')},
    {name: '', src: require('../assets/images/pexel-tiles-4.jpg')},
    {name: '', src: require('../assets/images/tiles-1.jpg')},
    {name: '', src: require('../assets/images/tiles-2.jpg')},
    {name: '', src: require('../assets/images/tiles-3.jpg')},
    {name: '', src: require('../assets/images/tiles-4.jpg')},
    {name: '', src: require('../assets/images/tiles-group-1.jpg')},
    {name: '', src: require('../assets/images/tiles-group-2.jpg')},
    {name: '', src: require('../assets/images/tiles-group-3.jpg')},
    {name: '', src: require('../assets/images/tiles-group-4.jpg')},
    {name: '', src: require('../assets/images/marble-1.jpg')},
    {name: '', src: require('../assets/images/marble-2.jpg')},
    {name: '', src: require('../assets/images/marble-3.jpg')},
    {name: '', src: require('../assets/images/office-building-1.jpg')},
    {name: '', src: require('../assets/images/office-building-2.jpg')},
    {name: '', src: require('../assets/images/office-building-3.jpg')},
] 

const ImageDisplayModal = ({src, show, handleShow}) => {

    const handleClose = () => handleShow(false);

    return (
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className='mx-auto' style={{maxWidth: '350px'}}>
                <Image src={src} alt={'arklink product'} className='w-100 h-auto' />
            </Modal.Body>
            <Modal.Footer>
                <button onClick={handleClose}></button>
            </Modal.Footer>
        </Modal>
    )
}

const MainGallery = () => {
    const [photoSrc, setPhotoSrc] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const handleImageClick = (src) => {
        setIsOpen(true);
        setPhotoSrc(src)
    }

    const ImageBox = ({src, name}) => {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3 p-0">
                <Image src={src} alt={name} className='w-100' onClick={() => handleImageClick(src)} />
            </div>
        )
    }

    // const shuffledList = shuffle(Images)

    const ImageList = Images.map(({name, src}, idx) => {
        return <ImageBox src={src} name={name} key={idx} />
    })
    
    return (
    <div className='my-3 p-5'>
      <h1 className='text-middle mt-4'>Photos</h1>
      <div className='row text-center'>
         {ImageList}
      </div>
      
     <ImageDisplayModal src={photoSrc} show={isOpen} handleShow={setIsOpen} />
    </div>
    );
}

export default MainGallery


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}