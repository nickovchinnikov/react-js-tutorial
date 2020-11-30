import $ from "jquery";
import { compose, curry, map, prop } from "ramda";

// Hack for side-effects
const Impure = {
  getJSON: curry((callback, url) => $.getJSON(url, callback)),
  setHtml: curry((sel, html) => $(sel).html(html)),
  trace: curry((tag, x) => {
    // eslint-disable-next-line no-console
    console.log(tag, x);
    return x;
  }),
};

const host = "api.flickr.com";
const path = "/services/feeds/photos_public.gne";
const query = (t: string) => `?tags=${t}&format=json&jsoncallback=?`;
const url = (t: string) => `https://${host}${path}${query(t)}`;

const img = (src: string) => $("<img />", { src });

interface FlickrMediaURL {
  m: string;
}

interface FlickrResponseItem {
  media: FlickrMediaURL;
}

interface FlickrResponse {
  description: string;
  items: FlickrResponseItem[];
}

// map's composition law
// compose(map(f), map(g)) === map(compose(f, g));

const mediaUrl = compose<FlickrResponseItem, FlickrMediaURL, string>(
  prop("m"),
  prop("media")
);

/*
compose(map(f), map(g)) === map(compose(f, g));
compose(map(img), map(mediaUrl)) === map(compose(img, mediaUrl));
*/

const mediaToImg = compose(img, mediaUrl);

const images = compose<
  FlickrResponse,
  FlickrResponseItem[],
  JQuery<HTMLElement>[]
>(map(mediaToImg), prop("items"));

const render = compose(Impure.setHtml("#js-main"), images);

const app = compose(Impure.getJSON(render), url);

// const app = compose(Impure.getJSON(Impure.trace("response")), url);
export const result = () => app("cats");
