import { useEffect } from 'react';
import { useState } from 'react';
import {
  Welcome,
  Text,
  Img,
  WrapMoreInfo,
  Hiword,
  DefaultText
} from './FrontPage.styled';
import { fetchApi } from './service';

const FrontPage = () => {
  const [arrImgs, setArrImg] = useState([]);


  useEffect(() => {
    fetchApi()
      .then(respons => {
        if (respons.ok) {
          return respons.json();
        }
        return Promise.reject(new Error(console.log));
      })
      .then(res => setArrImg(res.hits.map(hit => hit.webformatURL)))
      .catch(error => console.log(error));
  }, []);

   if (arrImgs.length === 0){return}
     return (
       <>
         <Hiword>Welcome -</Hiword>
         <Welcome> Сontact list</Welcome>
         <br />
         <Text>
           Our application will make your life easier and more enjoyable!
         </Text>
         <WrapMoreInfo>
           <Img
             src={arrImgs[Math.floor(Math.random() * arrImgs.length)]}
             alt="...just a nice photo...:)"
           />
           <DefaultText>
             Contact list - is an all in one application for managing contacts.
             <br />
             Access to contacts from any place and device.
             <br />
             You no longer need to worry about the reliable storage of important
             data!
           </DefaultText>
         </WrapMoreInfo>
       </>
     );
};

export default FrontPage;
