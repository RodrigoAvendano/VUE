const person = {
    first: 'Wes',
    last: 'Bos',
    country: 'Canada',
    city: 'Hamilton',
    twitter: '@wesbos'
};

const {first, last} = person;
console.log(first, last);

const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
        social: {
        twitter: 'https://twitter.com/wesbos',
        facebook: 'https://facebook.com/wesbos.developer',
        },
        web: {
        blog: 'https://wesbos.com'
        }
    }
};

const {twitter, facebook} = wes.links.social;
console.log(`Wes social links: 
${twitter}
${facebook}`);
