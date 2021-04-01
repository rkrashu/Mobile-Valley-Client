import axios from 'axios';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const [imageLink, setImageLink] = useState(null)
    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', '3d07d6945d21f7c878e715bc02050b31')
        imageData.append('image', event.target.files[0])

        axios.post("https://api.imgbb.com/1/upload", imageData)
          .then(function (response) {
            setImageLink(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    const onSubmit = data => {
        if(imageLink !== null){
            const productData = data;
            productData.imageURL = imageLink ;
            fetch('https://apple-custard-55014.herokuapp.com/addProducts', {
                method: "POST",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(productData)
            })
            .then(data => {
                console.log(data)
            })
        }
        else{
            alert('Image is uploading , Please wait')
        }
       
    };
    return (
        <Container>
            
           <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="name" placeholder='Product name' ref={register} /> <br/>
            <input type="text" name="price" placeholder= 'Price' ref={register} />  <br/>  
            <input type="file" name="image" onChange={handleImageUpload} /> <br/>
            <input type="submit" />
            </form>
        </Container>
    );
};

export default AddProducts;