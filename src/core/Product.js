import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {read, listRelated} from './apiCore'
import Card from './Card'
import '../detailCard.scss'
// import '../styles.scss'
import DetailCard from './DetailCard'



const Product = (props) => {
    
    const [product, setProduct] = useState({})
    const [relatedProduct, setRelatedProduct] = useState([])
    const [error, setError] = useState(false)

    const loadSigleProduct = productId => {
        read(productId).then(data => {
            if(data.error) {
                setError(data.error)
            
            } else {
                setProduct(data)  
                
                // fetch related products

                listRelated(data._id).then (data => {
                    if(data.error) {
                        setError(data.error)
                    } else {
                        setRelatedProduct(data)
                    
                    }
                })
            }
        })

    }

    useEffect(() => {
        const productId = props.match.params.productId
        loadSigleProduct(productId)
    }, [props])

    return(
        <Layout 
            title={product && product.name}
            description={product && product.description && product.description.substring(0,100)}
            className="container-fluid"
        
        >           
            <div className="detailrow">
                {/* <div className="post"> */}
                {product && 
                product.description && (
                <DetailCard product={product} showViewProductButton={false}/>
                )}
                </div>
            {/* </div> */}
                <h4>Related products</h4>
                <div className="relatedrow">
                    {/* <h4>Related products</h4> */}
                    {relatedProduct.map((p, i) => (
                    
                        <div className="relatedpost"> 
                            <Card key={i} product={p} />
                        </div>
                    ))}
                </div>
        </Layout>
    )
}


export default Product