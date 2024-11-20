

import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import Toast from '../Toast/Toast';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);
    const [toast, setToast] = useState(null);

    const handleAddToCart = () => {
        if (!selectedSize) {
            setToast({
                title: 'Lỗi!',
                message: 'Vui lòng chọn kích thước trước khi thêm vào giỏ hàng!',
                type: 'error',
                duration: 2000
            });
            return;
        }
        
        addToCart(product.id);
        setToast({
            title: 'Thành Công!',
            message: `Sản phẩm size ${selectedSize} đã được thêm vào giỏ hàng!`,
            type: 'success',
            duration: 2000
        });
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleCloseToast = () => {
        setToast(null);
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Jewelry shopping has changed a lot over time. When it comes to convenient shopping, online sales meet customers' needs in the most suitable way. It offers extreme comfort while shoppers can enjoy the variety of products available on the internet. Nowadays, there's nothing you can't find online. Even fine jewelry retailers have found a profitable edge in the power of digital technology. Consumers have embraced this prayer-answered convenience so quickly that online shopping has become a revolutionary trend.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-sizes">
                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                            <div 
                                key={size} 
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`} 
                                onClick={() => handleSizeSelect(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
                <div id="toast-container">
                    {toast && <Toast {...toast} onClose={handleCloseToast} />}
                </div>
                <p className='productdisplay-right-category'><span>Category :</span> . . .</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, . . .</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
