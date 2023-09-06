'use client'
import { useEffect } from "react";

interface Hello{
	msg:String
}
const Hello =  ({ msg }:Hello)=> {


useEffect(() => {
		return () => {
			// Remove the scroll event listener when the component unmounts
		};
	}, []);



	return ( <div>
				{msg}
		    </div>
	);
}
export default Hello
