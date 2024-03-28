export class NextAPI {
    constructor(options) {
        this.baseUrl = "https://jsonplaceholder.typicode.com";
        this.collectionUrl = "";
        this.getList = this.getList;
    }

    collection(name) {
        this.collectionUrl = `${this.baseUrl}/${name}`;

        return this;
    }

    async getList() {
        const response = await fetch(this.collectionUrl).then((response) =>
            response.json()
        );

        return response;
    }
}
