export const LoginApi = () => {
  return useService.get(`/api/v1/mainEn/BBSDataEn/findAll`);
};

export const useAuthen = {
  LoginApi,
};
