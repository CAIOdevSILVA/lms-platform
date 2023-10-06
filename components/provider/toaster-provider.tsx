'use client';

import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if(!isMounted){
		return null;
	}

	return <Toaster
	toastOptions={{
    success: {
      style: {
        background: 'green',
				color: 'white'
      },
    },
    error: {
      style: {
        background: 'red',
				color: 'white'
      },
    }
  }}
	/>;
};

export default ToasterProvider;
