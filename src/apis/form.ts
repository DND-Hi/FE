import api from "./common";

export const formApis = {
  postImage: async (body: { file: File; type: string }) => {
    const form = new FormData();
    form.append("file", body.file);
    return api.postWithAuth(`image/${body.type}`, form);
  },
};
