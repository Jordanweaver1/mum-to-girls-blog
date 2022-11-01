import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { graphCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';
import Dionne from '../images/Dionne.png';
import Ruby from '../images/Ruby.png';
import Charley from '../images/Charley.png';

const AboutUsBar = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mt-2 mb-8">
      <h3 className="text-2xl mb-8 text-center font-poppins font-semibold border-b pb-4">About Us</h3>
      <h3 className="text-center w-full text-xl mb-4 font-roboto font-semibold pb-4">Mummy!</h3>
          <div className="relative inline-block w-100 h-60 mb-8">
            <Image
              loader={graphCMSImageLoader}
              alt="mummy"
              layout=""
              className="shadow-lg rounded-t-lg lg:rounded-lg w-50 h-50 inline-block"
              src={Dionne}
            />
    </div>
      <h3 className="text-center w-full text-xl mb-8 mt-6 pb-4">Mummy is beautiful</h3>
      <h3 className="text-center w-full text-xl mb-4 font-semibold pb-4">Ruby!</h3>
          <div className="relative inline-block w-100 h-60 mb-8">
            <Image
              loader={graphCMSImageLoader}
              alt="mummy"
              layout=""
              className="shadow-lg rounded-t-lg lg:rounded-lg w-50 h-50 inline-block"
              src={Ruby}
            />
    </div>
      <h3 className="text-center w-full text-xl mb-8 mt-6 pb-4">Ruby is a princess</h3>
      <h3 className="text-center w-full text-xl mb-4 font-semibold pb-4">Charley!</h3>
          <div className="relative inline-block w-100 h-60 mb-8">
            <Image
              loader={graphCMSImageLoader}
              alt="mummy"
              layout=""
              className="shadow-lg rounded-t-lg lg:rounded-lg w-50 h-50 inline-block"
              src={Charley}
            />
    </div>
      <h3 className="text-center w-full text-xl mb-8 mt-6 pb-4">Charley is a cheeky monkey</h3>
    </div>
    
  );
};

export default AboutUsBar;