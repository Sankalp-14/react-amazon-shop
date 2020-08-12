import React from 'react';
import './Computer.css';
import ComputerProduct from './ComputerProduct';

function Computer() {
    return (
        <div className="computer">
            <img className="computer__image" src="https://1ue0vq2ip2m91b3g7z258a5v-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/amazon-lightning-deals.png" alt="" />
        
            <div className="mobile__row">
            <ComputerProduct  
             id="1"
             title="Lenovo Ideapad Slim 3i 10th Gen Intel Core i5 15.6 inch FHD Thin and Light Laptop (8GB/1TB/Windows 10/MS Office/Grey/1.85Kg), 81WE004WIN"
             price={30.32}
             image="https://images-na.ssl-images-amazon.com/images/I/61EDIGF7kmL._SL1500_.jpg"
            />

            <ComputerProduct  
             id="2"
             title="Lenovo Ideapad S145 Intel Core I5 8th Gen 15.6-inch FHD Thin and Light Laptop ( 8GB RAM / 1TB HDD / Windows 10 Home / Microsoft Office Home and Student 2019/ Black / 1.85 "
             price={45.10}
             image="https://images-na.ssl-images-amazon.com/images/I/71FZ8R4ysqL._AC_SL1500_.jpg"
            />

            <ComputerProduct  
             id="3"
             title="Streamline your day - Sometimes it's best to keep things simple. The newly redesigned IdeaPad 330 is as powerful as it is easy to use. Featuring ..."
             price={60.33}
             image="https://images-na.ssl-images-amazon.com/images/I/71pdkziNWaL._SL1500_.jpg"
            />
        </div>

        <div className="mobile__row">
            <ComputerProduct  
             id="1"
             title="High-performance MacBook Pro with Magic Keyboard, and fast Intel Core i5 and i7 processors, is available with all 13-inch models. Buy now with free ..."
             price={2999}
             image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-202005?wid=892&hei=820&&qlt=80&.v=1587460552755"
            />

            <ComputerProduct  
             id="2"
             title="
             It might not be the laptop the world is ready for, but it's the laptop the world needs. And you can get it in pink now."
             price={1299}
             image="https://media.wired.com/photos/592708127034dc5f91bed670/master/pass/rosegold-macbookft1.jpg"
            />

            <ComputerProduct  
             id="3"
             title="Is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 8GB ..."
             price={1149.99}
             image="https://i.gadgets360cdn.com/products/laptops/large/1546457015_635_apple_macbook-air-mrea2hn-a.jpg"
            />
        </div>
               
        <div className="mobile__row">
            <ComputerProduct  
             id="1"
             title="Latest pricing, specs and Dell Latitude 7390 Notebook gaming laptop review. How many PC games will it run? Is it a good choice for a PC gamer? Should ..."
             price={154.30}
             image="https://mos.pcgamebenchmark.com/img/product/dell-latitude-7390-notebook/dell-latitude-7390-notebook-gaming-laptop-review.jpg"
            />

            <ComputerProduct  
             id="2"
             title="RAM:8 GB,Processor:Intel Core i3,Screen Size:39.62 cm (15.6 inch),Color:Silver"
             price={44.80}
             image="https://images.jdmagicbox.com/quickquotes/images_main/dell-inspiron-15-3584-intel-core-i3-7th-gen-15-6-fhd-laptop-8gb-1tb-hdd-windows-10-ms-office-h-and-s-silver-2-05kg-164426910-5x59k.jpg"
            />

            <ComputerProduct  
             id="3"
             title="14-inch laptop in a clean, fresh design. Fully featured with adaptive thermals, a lid sensor, and a 3 sided narrow border."
             price={39.99}
             image="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/laptops-inspiron-14-5490-pdp-gallery-504x350.jpg"
            />
        </div>


        </div>
    )
}

export default Computer
