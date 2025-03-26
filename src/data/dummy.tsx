import { Testimonial } from "../components/testimonials";

export const testimonialsData: Testimonial[] = [
    {
        name: 'Darrell Steward',
        handle: '@darrels',
        avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg',
        text: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
        hashtag: '#another',
    },
    {
        name: 'Leslie Alexander',
        handle: '@lesslie',
        avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg',
        text: 'Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.',
        hashtag: '#Celebration',
    },
    {
        name: 'Jenny Wilson',
        handle: '@jennywilson',
        avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg',
        text: 'This is a top quality product. No need to think twice before making it live on web.',
        hashtag: '#make_it_fast',
    },
    {
        name: 'Kristin Watson',
        handle: '@kristinwatson2',
        avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg',
        text: 'Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.',
        hashtag: '#Celebration',
    },
    {
        name: 'Guy Hawkins',
        handle: '@jennywilson',
        avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-5.jpg',
        text: 'This is a top quality product. No need to think twice before making it live on web.',
        hashtag: '#make_it_fast',
    },
    {
        name: 'Marvin McKinney',
        handle: '@darrels',
        avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-6.jpg',
        text: 'With Celebration, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.',
        hashtag: '#dev #tools',
    },
    {
        name: 'Annette Black',
        handle: '@darrels',
        avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg',
        text: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
        hashtag: '#another',
    },
    {
        name: 'Floyd Miles',
        handle: '@darrels',
        avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-8.jpg',
        text: 'My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
        hashtag: '#Celebration',
    },
];

export const contactInfo = [
    {
        icon: (
            <svg className="flex-shrink-0 w-10 h-10 mx-auto text-[#3E868E] " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
            </svg>
        ),
        details: [
            { text: '+1-316-555-0116' },
            { text: '+1-446-526-0117' }
        ]
    },
    {
        icon: (
            <svg className="flex-shrink-0 w-10 h-10 mx-auto text-[#3E868E] " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        details: [
            { text: 'contact@example.com' },
            { text: 'hr@example.com' }
        ]
    },
    {
        icon: (
            <svg className="flex-shrink-0 w-10 h-10 mx-auto text-[#3E868E] " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        details: [
            { text: '8502 Preston Rd. Ingle, Maine 98380, USA' }
        ]
    }
];
