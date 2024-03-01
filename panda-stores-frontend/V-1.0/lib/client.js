import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId :'nmh18v7y',
    dataset : 'panda-stores',
    apiVersion : '2024-02-28',
    useCdn : true,
    token : process.env.NEXT_PUBLIC_SANITY_TOKEN,

});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);