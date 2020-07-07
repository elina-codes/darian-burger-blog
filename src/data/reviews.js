// Main images
import review1_main from '../images/reviews/burger1.jpg';
import review2_main from '../images/reviews/burger2.jpg';
import review3_main from '../images/reviews/burger3.jpg';

// Second images
import review1_second from '../images/reviews/burger2.jpg';
import review2_second from '../images/reviews/burger3.jpg';
import review3_second from '../images/reviews/burger1.jpg';

// Third images
import review1_third from '../images/reviews/burger3.jpg';
import review2_third from '../images/reviews/burger1.jpg';
import review3_third from '../images/reviews/burger2.jpg';

const reviews = {
  review1: {
    title: 'Burger Review 1',
    url: '/review1/',
    images: {
      main: {
        src: review1_main,
        alt: 'Burger and fries'
      },
      second: {
        src: review1_second,
        alt: 'Close up of burger'
      },
      third: {
        src: review1_third,
        alt: 'Close up of fries'
      }
    },
    ratings: {
      appearance: 10,
      taste: 8,
      mess: 7,
      fries: 8,
      price: 7
    }
  },
  review2: {
    title: 'Burger Review 2',
    url: '/review2/',
    images: {
      main: {
        src: review2_main,
        alt: 'Burger and fries'
      },
      second: {
        src: review2_second,
        alt: 'Close up of burger'
      },
      third: {
        src: review2_third,
        alt: 'Close up of fries'
      }
    },
    ratings: {
      appearance: 10,
      taste: 10,
      mess: 10,
      price: 10
    }
  },
  review3: {
    title: 'Burger Review 3',
    url: '/review3/',
    images: {
      main: {
        src: review3_main,
        alt: 'Burger and fries'
      },
      second: {
        src: review3_second,
        alt: 'Close up of burger'
      },
      third: {
        src: review3_third,
        alt: 'Close up of fries'
      }
    },
    ratings: {
      appearance: 8,
      taste: 8,
      mess: 5,
      fries: 7,
      price: 5
    }
  }
};

export default reviews;
