import React, { useState } from 'react';
import ImageKit from 'imagekit-javascript';
import Header from '../components/Header';
import PreHeader from '../components/PreHeader';
import Footer from '../components/Footer';
import Image from 'next/image'

// window.Buffer = window.Buffer || require("buffer").Buffer;

const API_URL = process.env.REACT_APP_API_URL;

const imageKit = new ImageKit({
    publicKey: 'public_DgRh+fRF2Y8QPPIyq9+E3ew6nlo=' ,
    urlEndpoint: 'https://ik.imagekit.io/kivel59' ,
    authenticationEndpoint: `${API_URL}/api/image-kit-auth/`
})


const Gallery = ({imgUrl}) => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-xs-8 col-md-6 my-4 shadow">
                    <h6 className="text-secondary center"> Uploaded file preview </h6>
                    <Image src={imgUrl} alt="" className="w-100" />
                </div>
            </div>
        </div>
    );
}

const UploadForm = () => {
    const [progress , setProgress] = useState(0);
    const [fileName, setFileName] = useState('')
    const [file, setFile] = useState();

    const [uploadedFileUrl, setUploadedFileUrl] = useState('')

    const handleFileUpload = async (e) => {
        e.preventDefault()
        console.log('processing...')

        let params = {
            file: file,
            fileName: fileName
        }
        
        imageKit.upload(params, (err, response) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log(response)
            setUploadedFileUrl(response.url)
        })
    }

    return (
        <div className="container-fluid">
            <div className="site-section p-5">
                <div className="mains m-auto p-3 border" style={{maxWidth: '500px'}}>
                    <h3 className="text-center">Upload Fiiles</h3>
                    <div className="form-wrapper">
                        <form onSubmit={handleFileUpload}>
                            <div className="form-group">
                                <label htmlFor="file-name">File name</label>
                                <input type="text" value={fileName} onChange={e => setFileName(e.target.value)} id="file-name" className="form-control" placeholder='enter custom file name' required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Choose file</label>
                                <input type="file" onChange={e => setFile(e.target.files[0])} id="chosen-file" hidden/>
                                <label htmlFor="chosen-file" className='form-control p-5 text-center bg-secondary'>
                                    <h4 className='text-white'> {file?.name ?? 'Drag and drop file'} </h4>
                                    <label htmlFor="chosen-file" className='btn btn-large m-auto'>Choose file</label>
                                </label>
                            </div>
                            <div className="form-group text-center">
                                <input type="submit" value="Upload" className="btn btn-lg my-3 m-auto" />
                            </div>
                        </form>
                    </div>
                </div>
                { uploadedFileUrl && <Gallery imgUrl={uploadedFileUrl} /> }
            </div>
        </div>
    )
}

const S3Test = () => {
  return (
    <>
    <PreHeader />
    <Header />
    <UploadForm />
    <Footer />
    </>
  )
}

export default S3Test