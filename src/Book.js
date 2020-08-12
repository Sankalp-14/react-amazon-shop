import React from 'react';
import './Book.css';
import BookProduct from './BookProduct';

function Book() {
    return (
        <div className="book">
            <img className="book__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/072020/AugART/XCM_CUTTLE_1239330_1269118_IN_AUGART20_3237491_1500x300_en_IN.jpg" alt="" />
            
            <div className="mobile__row">
            <BookProduct  
             id="1"
             title="Pre Kindergarten Workbook (Little Genius Series): Teaches Numbers, Counting, Simple Addition, Comparing Quantities, Shapes and Patterns Activities to Pre-Schooler (3-5 years) "
             price={4.50}
             image="https://images-na.ssl-images-amazon.com/images/I/51BdIp38TdL._SY498_BO1,204,203,200_.jpg"
            />

            <BookProduct  
             id="2"
             title="Phonics & Vocabulary II: Kindergarten Workbook (Little Genius Series): Learn Blend Sounds, Sight Words, Phonics Activities, Vocabulary and Reading(4-6 years)(english)"
             price={3.4}
             image="https://images-na.ssl-images-amazon.com/images/I/51fGbEGxGfL._SY498_BO1,204,203,200_.jpg"
            />

            <BookProduct  
             id="3"
             title="Comprehension Ages 5-7: Prepare for school with easy home learning (Collins Easy Learning KS1)"
             price={5.00}
             image="https://images-na.ssl-images-amazon.com/images/I/51l4k-9TysL._SX352_BO1,204,203,200_.jpg"
            />
        </div>

        <div className="mobile__row">
            <BookProduct  
             id="1"
             title="Meditation And Its Methods: Swami Vivekananda’s Most Popular book on Meditation Kindle Edition"
             price={3.54}
             image="https://m.media-amazon.com/images/I/516AcsiO5PL.jpg"
            />

            <BookProduct  
             id="2"
             title="The Power of Your Subconscious Mind Kindle Edition"
             price={6.4}
             image="https://m.media-amazon.com/images/I/41RMM3XK0wL.jpg"
            />

            <BookProduct  
             id="3"
             title="10 Ways to Motivate Yourself: Change Your Life Forever Kindle Edition"
             price={7.00}
             image="https://m.media-amazon.com/images/I/51GoH7TWGRL.jpg"
            />
        </div>

        <div className="mobile__row">
            <BookProduct  
             id="1"
             title="RS Agarwal - Quantitative Aptitude + Logical Reasoning Product Bundle"
             price={12.24}
             image="https://images-na.ssl-images-amazon.com/images/I/51inXBp6T+L._SY312_BO1,204,203,200_.jpg"
            />

            <BookProduct  
             id="2"
             title="Quantitative Aptitude for Competitive Examinations Paperback – 21 February 2020"
             price={10.4}
             image="https://images-na.ssl-images-amazon.com/images/I/51p6BRUjG5L._SX391_BO1,204,203,200_.jpg"
            />

            <BookProduct  
             id="3"
             title="Quantitative Aptitude for CAT, 5e [Print Replica] Kindle Edition"
             price={9.40}
             image="https://m.media-amazon.com/images/I/51ykxebJlaL.jpg"
            />
        </div>
 


        </div>
    )
}

export default Book
