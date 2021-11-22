import React , {useEffect , useState} from 'react';
import Commerce from '@chec/commerce.js';
import { useParams } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import SousNavbar from '../../components/SousNavbar/SousNavbar';
import './SinglePage.css'


const SinglePage = (props) => {
    const [loading , setLoading] = useState(false);
    const [message , setMessage] = useState(false);
    const [data , setData] = useState();
    const id = useParams();

    const commerce = new Commerce('pk_36001f7af3b1b51abce851bf8b1542f4c28480fe48b39');
    
    useEffect(() => {
        commerce.products.list({
          category_slug : ['ensemble-2-ps']
        }).then((product) => {
           if(product.length === "0") {
               setMessage("no item")
           }else{
               setLoading(true);
               setData(product.data.find(x => x.permalink === id.id))
           }
        })
      }, [])
     console.log(data)
    return (
        <>
            <Navbar/>
            <SousNavbar/>
            <div className="SinglePage-Container">
                {!message ? (
                    <>
                        {loading ? (
                            <>  
                                <div className="SinglePage-Item">
                                    <div className="SinglePage-Item-Image">
                                        <img src={data.image.url} alt={data.name} />
                                    </div>
                                    <div className="SinglePage-Item-Informations">
                                        <span className="EnStock-box"></span>
                                    </div>
                                </div>
                            </>
                        ): (
                            <>
                            <h1>...Loading</h1>
                            </>
                        )}
                    </>
                ):(
                    <>
                    <h1> {message} </h1>
                    </>
                )}
            </div>
        </>
    )
}

export default SinglePage


/* 


*/