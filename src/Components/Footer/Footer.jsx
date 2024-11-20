import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="Footer-logo">
            <img src={footer_logo} alt="" />
            <p>LUXURIOUS</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>
                <a href="https://www.google.com/maps/place/QX7R%2BMR4,+Th%C3%B4n+8,+Ea+Kar,+%C4%90%E1%BA%AFk+L%E1%BA%AFk,+Vi%E1%BB%87t+Nam/@12.7641166,107.9922004,19.89z/data=!4m6!3m5!1s0x317203044c22661f:0x9e9fd48b7fa821b3!8m2!3d12.7641093!4d107.9920391!16s%2Fg%2F11jsjk4lry?hl=vi-VN&entry=ttu">
                Địa chỉ: 63, Thôn 8, xã Eabar, Huyện Buôn Đôn, Tỉnh Đăk Lăk Việt Nam.</a>
                <a href="tel:0825570615"> Tổng đài hỗ trợ : 0825570615 - </a>
                <a href="mailto:nnam18740@gmail.com">Email: cskh@hotro.luxuriors.vn</a>
            </p>
            <p><a href="https://www.facebook.com/profile.php?id=100023623386098">Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Nam Trung Nguyên</a></p>
            <p>Mã số doanh nghiệp : 0919925332 do Sở Kế hoạch & Đầu tư TP Hồ Chí Minh cấp lần đầu ngày 11/09/2024</p>
            <p>LUXURIOUS © 2024 - Bản quyền thuộc về Công ty TNHH LUXURIOUS</p>
        </div>
    </div>
  )
}

export default Footer