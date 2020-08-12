import React from 'react';
import './Electronic.css';
import ElectronicProduct from './ElectronicProduct';

function Electronic() {
    return (
        <div className="electronic">
            <img className="electronic__image" src="https://www.gadgetbridge.com/wp-content/uploads/2019/09/Festive-Offers-KV-1.jpg" alt="" />


            <div className="mobile__row">
            <ElectronicProduct  
             id="1"
             title="Any price comparison is to a new, nonrefurbished product price., Samsung NU8000 55”, 65”, or 75” 4K UHD Smart TV (Refurbished), Thanks to a robust set ..."
             price={54.99}
             image="https://cdn2.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2019/07/best_tvs_samsung.jpg?itok=s4NmX_Jf"
            />

            <ElectronicProduct  
             id="2"
             title="Buy Samsung HD TV UA32N4300ARLXL online. Learn all about 32 N4300 Smart HD TV including prices, offers, specifications & shop from Samsung India."
             price={29.99}
             image="https://images.samsung.com/is/image/samsung/in-hdtv-n4300-ua32n4300arlxl-ua--r----auxxl-189538555?$PD_GALLERY_L_JPG$"
            />

            <ElectronicProduct  
             id="3"
             title="Check Samsung 50NU7470 (50-inch) Ultra HD 4K Smart LED TV Specs And Reviews. Compare Samsung 50NU7470 (50-inch) ..."
             price={67.39}
             image="https://cdn1.smartprix.com/rx-ifMDcaphA-w1200-h1200/samsung-50nu7470-50.jpg"
            />
        </div>

        <img className="electronic__image" src="https://www.idgcdn.com.au/article/images/740x500/dimg/unnamed5_3.jpg" />

        
        <div className="mobile__row">
            <ElectronicProduct  
             id="1"
             title="
             Mega Capacity, Energy Savings with Inverter Linear Compressor, Moist Balance Crisper™, Platinum Silver"
             price={13.50}
             image="https://smarthomeguide.in/wp-content/uploads/2018/07/lg-687.jpg"
            />

            <ElectronicProduct  
             id="2"
             title="Buy LG 7kg Fully Automatic Top Loading (T70SJFS1Z) online at the best price in India for updated hourly on 8th August 2020. Compare specs, ..."
             price={21.09}
             image="https://images-na.ssl-images-amazon.com/images/I/61FI1iqZkML._SL1500_.jpg"
            />

            <ElectronicProduct  
             id="3"
             title="Mangla Invertor Battery & RO - Offering Whirlpool Magicool Split AC, For Residential Use in Palwal, Haryana. Read about company. Get ..."
             price={25.00}
             image="https://5.imimg.com/data5/GK/GW/MY-30579983/magicool-500x500.jpg"
            />
        </div>
       
        <img className="electronic__image" src="https://nagpuroranges.com/wp-content/uploads/Sony-5.1-Home-Theater-System.jpeg" />
         
        <div className="mobile__row">
            <ElectronicProduct  
             id="1"
             title="This 5.1-channel home theater system comes with an AV receiver and a speaker package (one center channel, two front channel and two surround speakers, ..."
             price={10.50}
             image="https://images-na.ssl-images-amazon.com/images/I/81lTw2G06pL._AC_SX425_.jpg"
            />

            <ElectronicProduct  
             id="2"
             title="The LG LHB675 1000 Watt Home Theater System with 4.2 Channel Sound. Access premium content like Netflix and Hulu Plus (subscriptions sold separately) ..."
             price={15.00}
             image="https://images-na.ssl-images-amazon.com/images/I/41LE0I3HSuL._AC_SX425_.jpg"
            />

            <ElectronicProduct  
             id="3"
             title="5-disc BRAVIA® DVD home theater system with digital video output and upconversion"
             price={20.10}
             image="https://images.crutchfieldonline.com/ImageHandler/trim/620/378/products/2007/158/x158HDX265-o.jpeg"
            />
        </div>
       

        </div>
    )
}

export default Electronic
