import OpenTDBService from "./OpenTDBService";

interface Api {
    OpenTDBService: OpenTDBService;
}

const api: Api = {
    OpenTDBService: new OpenTDBService()
}

export default api;