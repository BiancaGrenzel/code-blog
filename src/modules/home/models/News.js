export class news {
    static getNewsByPopularity() {
        const result = fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-01-01&sortBy=popularity&apiKey=7520e5ddac9940039d1f0bd2400832db`).then((response) => {
            return response.json();
        });
        return result;
      }
}