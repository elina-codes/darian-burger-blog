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

/*
ex:
  ux_review_name: {
    title: "Review title",
    url: "/url-for-page",
    images: {
      main: {
        src: variable_name_for_image_declared_above,
        alt: "Alt text to appear with image"
      },
      second: {
        src: variable_name_for_image_declared_above,
        alt: "Alt text to appear with image"
      },
      third: {
        src: variable_name_for_image_declared_above,
        alt: "Alt text to appear with image"
      }
    },
    resources: [
      {
        source: "Name of the resource (REQUIRED)",
        url: "https://self.explanatory.com (REQUIRED)"",
        title: "Title to be linkified",
        notes: "(extra notes to follow the link)",
      },
      {
        source: "Name of the resource (REQUIRED)",
        url: "https://self.explanatory.com (REQUIRED)"",
        title: "Title to be linkified",
        notes: "(extra notes to follow the link)",
      }
    ]
  }


*/
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
    resources: [
      {
        source: 'UX Planet',
        url: 'https://uxplanet.org/the-magic-of-paper-prototyping-51693eac6bc3',
        title: 'The Magic of Paper Prototyping'
      },
      {
        source: 'inVision',
        url: 'https://www.invisionapp.com',
        notes: '(a great tool for digital prototyping)'
      }
    ]
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
    resources: [
      {
        source: 'hotjar',
        url: 'https://www.hotjar.com/blog/open-ended-questions/#what-are-open-ended-questions',
        title: 'Open-ended vs. closed-ended questions: how to survey your users'
      },
      {
        source: 'UX Planet',
        url: 'https://uxplanet.org/this-is-all-you-need-to-know-to-conduct-a-ux-survey-50400af45920',
        title: 'This is all you need to know to conduct a UX Survey'
      }
    ]
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
    resources: [
      {
        source: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Competitor_analysis',
        title: 'Competitor analysis'
      },
      {
        source: 'Usability Geek',
        url: 'https://usabilitygeek.com/how-to-do-ux-competitor-analysis/',
        title: 'How To Do A UX Competitor Analysis: A Step By Step Guide'
      }
    ]
  }
};

export default reviews;
