// Default config options
// const defaultOptions = {
//     baseURL: <CHANGE-TO-URL>,
//     baseURL: process.env.APP_API_BASE_URL,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   // Create instance
//   let instance = axios.create(defaultOptions);

//   // Set the AUTH token for any request
//   instance.interceptors.request.use(function (config) {
//     
//     const token = localStorage.getItem('token');
//     if (token)
//     config.headers.Authorization =  token ? `Bearer ${token}` : '';
//     return config;
//   });


