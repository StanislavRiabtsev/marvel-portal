class MarvelService {
    _apiBase = 'https://marvel-server-zeta.vercel.app/';
    _apiKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df';

    getResoure = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResoure(`${this._apiBase}characters?limit=5&${this._apiKey}`);

    }

    getCharacters = () => {
        return this.getResoure(`${this._apiBase}characters?name=Thor&${this._apiKey}`);

    }
}

export default MarvelService;