import React from 'react';
import './Mobile.css';
import MobileProduct from './MobileProduct';

function Mobile() {
    return (
        <div className="mobile">
        <img className="mobile__image" src="https://i.gadgets360cdn.com/large/sale-main_1569658905284.jpg" alt="" />
        

        <div className="mobile__row">
            <MobileProduct  
             id="1"
             title="The OnePlus Nord is a new budget offering from OnePlus, which manages to deliver a similar Android experience as the OnePlus 8, but at a more ..."
             price={25.11}
             image="https://i.gadgets360cdn.com/products/large/oneplus-nord-379x800-1595392253.jpg"
            />

            <MobileProduct  
             id="2"
             title="Mobile Phone 6,78 AMOLED 3168 × 1440, processor Qualcomm Snapdragon 865 8-core, RAM 8 GB, internal memory 128 GB, main camera with optical zoom 48 ..."
             price={99.10}
             image="https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=ONE0073b1"
            />

            <MobileProduct  
             id="3"
             title="Smartphone manufacturer giant, OnePlus has started offering its latest OnePlus 8 Pro mobile at a starting price. The phone is available ..."
             price={4.33}
             image="https://static.toiimg.com/thumb/msid-75152394,width-320,resizemode-4,imgv-6/OnePlus-8-Pro.jpg"
            />
        </div>

        <div className="mobile__row">
            <MobileProduct  
             id="1"
             title="2 Year Lease Contract The new display on iPhone XR is the most advanced LCD in the industry. So you see true-to-life colour from one beautiful edge to ..."
             price={31.00}
             image="https://www.renttoown.com.au/wp-content/uploads/2019/02/iPhone-xr-600x600.jpg"
            />

            <MobileProduct  
             id="2"
             title="Originally released September 2018 Unlocked, SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ..."
             price={799.00}
             image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1579299530930"
            />

            <MobileProduct  
             id="3"
             title="The pink Silicone Case for iPhone XS Max protects and fits snugly over the curves of your iPhone, without adding bulk. Learn more at apple.com."
             price={24.95}
             image="https://www.pipetto.co.uk/media/catalog/product/i/p/iphone-xs-max-shell-rose-gold-back.jpg"
            />
        </div>

        <div className="mobile__row">
            <MobileProduct  
             id="1"
             title="Is powered by the Qualcomm SDM439 Snapdragon 439 Octa-core (2×1.95 GHz Cortex-A53 + 6×1.45 GHz Cortex A53) processor. The smartphone comes with a ..."
             price={11.00}
             image="https://www.gizmochina.com/wp-content/uploads/2019/10/vivo-Y11-2019-500x500.jpg"
            />

            <MobileProduct  
             id="2"
             title="Lowest price of Vivo V19 in India is 24990 as on today. Phone is loaded with 8 GB RAM, 128 GB Internal storage and 4500 battery. Have a look at expert ..."
             price={24.00}
             image="https://static.digit.in/default/ecc9bccbe133b207187e07937c24e4ab0a05c826.jpeg?tr=1200"
            />

            <MobileProduct  
             id="3"
             title="smartphone runs on Android v8.1 (Oreo) operating system. The phone is powered by Octa core (1.95 GHz, Quad core, Cortex A53 + 1.45 GHz, Quad core, ..."
             price={18.99}
             image="https://static.toiimg.com/thumb/msid-66807588,width-240,resizemode-4,imgv-6/Vivo-Y95.jpg"
            />
        </div>
        </div>
    )
}

export default Mobile
