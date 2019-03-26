import Book from '../../Book';

const MAX_RESULTS = 40;

interface ImageLinks {
  "smallThumbnail": string,
  "thumbnail": string,
}

interface PanelizationSummary {
  "containsEpubBubbles": boolean,
  "containsImageBubbles": boolean
}

interface ReadingModes {
  "text": boolean,
  "image": boolean,
}

interface IndustryIdentifier {
  "type": string,
  "identifier": string
}

interface VolumeInfo {
  "title": string,
  "authors": string[],
  "publisher"?: string,
  "publishedDate": string,
  "description": string,
  "industryIdentifiers"?: IndustryIdentifier[],
  "readingModes": ReadingModes,
  "pageCount": number,
  "printType": string,
  "categories": string[],
  "maturityRating": string,
  "allowAnonLogging": boolean,
  "contentVersion": string,
  "panelizationSummary": PanelizationSummary,
  "imageLinks": ImageLinks,
  "language": "ja",
  "previewLink": string,
  "infoLink": string,
  "canonicalVolumeLink": string
}

interface Price {
  "amount": number,
  "currencyCode": string
}

interface Offer {
  "finskyOfferType": number,
  "listPrice": Price,
  "retailPrice": Price,
}

interface SaleInfo {
  "country": string,
  "saleability": string,
  "isEbook": boolean,
  "listPrice": Price,
  "retailPrice": Price,
  "buyLink": string,
  "offers": Offer[],
}

interface Item {
  "kind": string,
  "id": string,
  "etag": string,
  "selfLink": string,
  "volumeInfo": VolumeInfo,
  "saleInfo": SaleInfo
}

interface VolumeResponse {
  "kind": string,
  "totalItems": number,
  "items": Item[],
}

const parse = (response: VolumeResponse): Book[] => {
  const books = response.items.map((item: Item) => {
    const volumeInfo = item.volumeInfo;
    const authors = (volumeInfo.authors) ? volumeInfo.authors : [''];
    const author = (authors[1]) ? authors[1] : authors[0];
    let isbn_10, isbn_13;
    const industryIdentifiers = (volumeInfo.industryIdentifiers) ? volumeInfo.industryIdentifiers : [];
    for (const identifier of industryIdentifiers) {
      switch(identifier.type) {
        case 'ISBN_10': isbn_10 = identifier.identifier;
                        break;
        case 'ISBN_13': isbn_13 = identifier.identifier;
                        break;
      }
    }

    return new Book({
      title: volumeInfo.title,
      author: author,
      publisher: volumeInfo.publisher,
      publishedDate: volumeInfo.publishedDate,
      pageCount: volumeInfo.pageCount,
      isbn_10: isbn_10,
      isbn_13: isbn_13,
    });
  });

  return books;
}

const buildSearchUrl = (q: string, startIndex: number, maxResults: number) => {
  return `https://www.googleapis.com/books/v1/volumes?q=${q}&startIndex=${startIndex}&maxResults=${maxResults}`;
}

export const searchBooks = async (text: string): Promise<Book[]> => {
  const url = buildSearchUrl(text, 0, MAX_RESULTS);
  const res = await fetch(url);
  const reuslt = await res.json();

  return parse(reuslt);
}