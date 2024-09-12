import React from 'react'
import './DescriptionBox.css'

 const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that 
                facilitates the buying and selling of goods and
                 services over the internet. It typically features
                  a user-friendly interface, enabling customers to
                   browse through various product categories, view 
                   detailed descriptions, compare prices, and make 
                   secure payments. These websites often incorporate
                    features like search functionality, customer 
                    reviews, personalized recommendations, and
                     shopping carts for a seamless shopping 
                     experience. </p>
                     <p>Additionally, they may provide
                      multiple payment options, shipment tracking, 
                      and customer support services to enhance user
                       satisfaction. E-commerce websites streamline
                        the purchasing process, making it accessible
                         and convenient for consumers globally.</p>
        </div>
    </div>
  )
}
export default DescriptionBox