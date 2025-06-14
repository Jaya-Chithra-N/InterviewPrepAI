import React from 'react';

const SpinnerLoader = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-cyan-900"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 
             50 100.591C22.3858 100.591 0 78.2051 
             0 50.5908C0 22.9766 22.3858 0.59082 
             50 0.59082C77.6142 0.59082 100 22.9766 
             100 50.5908ZM9.08144 50.5908C9.08144 
             73.1895 27.4013 91.5094 50 91.5094C72.5987 
             91.5094 90.9186 73.1895 90.9186 
             50.5908C90.9186 27.9921 72.5987 9.67226 
             50 9.67226C27.4013 9.67226 9.08144 
             27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 
             97.8624 35.9116 97.0079 33.5539C95.2932 
             28.8227 92.871 24.3692 89.8167 
             20.348C85.8452 15.1192 80.8826 
             10.7238 75.2124 7.41289C69.5422 
             4.10194 63.2754 1.94025 56.7698 
             1.05124C51.7666 0.367541 46.6976 
             0.446843 41.7345 1.27873C39.2611 
             1.69328 38.1342 4.47154 39.6235 
             6.54226C41.1128 8.61298 43.9026 
             9.73851 46.376 9.324C50.6905 
             8.62936 55.1036 8.65899 59.3776 
             9.41136C64.9091 10.4334 70.1382 
             12.5457 74.8055 15.6312C79.4729 
             18.7166 83.4953 22.7076 86.6279 
             27.3662C88.9178 30.69 90.6384 
             34.352 91.7266 38.194C92.3056 
             40.1604 94.4645 40.6781 93.9676 
             39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SpinnerLoader;
