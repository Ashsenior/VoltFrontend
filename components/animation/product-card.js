import React from "react";

const ProductCard = () => {
  var items = [
    {
      name: "Meetups #1",
      description: "Hello World!",
      type: "Mumbai",
      time: "14-Dec, 10:10am",
      image:
        "https://play-lh.googleusercontent.com/sTPusxi30AHxiRHEFK9i5BCK-Y8BJ6Y_NCQNq6l9U6BuDv8kNRdIfsHzvmlA1XULDb3c=s256-rw",
    },
    {
      name: "Meetups #2",
      description: "Hello World!",
      type: "Mumbai",
      time: "14-Dec, 10:10am",
      image:
        "https://play-lh.googleusercontent.com/mwTU9-4NX-_QlATb6lILSinKI47wAtOM38GjPYRPQSsQOG2hVRY4h9OfEhDxpf8ADQ=s256-rw",
    },
    {
      name: "Meetups #3",
      description: "Hello World!",
      type: "Mumbai",
      time: "14-Dec, 10:10am",
      image:
        "https://play-lh.googleusercontent.com/hihXCV-0wxOXB5N7uBREaJeCVK0BDjNEBtKwNAncftZMflpEvasiKXn7vCKxu9qGpvk=s256-rw",
    },
    {
      name: "Meetups #4",
      description: "Hello World!",
      type: "Delhi",
      time: "14-Dec, 10:10am",
      image:
        "https://play-lh.googleusercontent.com/48wwD4kfFSStoxwuwCIu6RdM2IeZmZKfb1ZeQkga0qEf1JKsiD-hK3Qf8qvxHL09lQ=s256-rw",
    },
    {
      name: "Meetups #5",
      description: "Hello World!",
      type: "Mumbai",
      time: "14-Dec, 10:10am",
      image:
        "https://play-lh.googleusercontent.com/fbSH19yFTkyBXGNCBMgxAxBJUMG3w6M1ZnZOuwRwmd0ynPR3MMFKMKTiD7Ggbr-cVurs=s256-rw",
    },
    {
      name: "Meetups #8",
      description: "Hello World!",
      type: "Mumbai",
      time: "14-Dec, 10:10am",
      image:
        "https://play-lh.googleusercontent.com/hSyebBlYwtE2aMjzSIHasUO9cQv9HgNAw9owy6ADO0szOKYO3rDk60r7jcyXu82Fbq1M=s256-rw",
    },
    {
      name: "Meetups #6",
      description: "Hello World!",
      type: "Mumbai",
      time: "14-Dec, 10:10am",
      image:
        "https://play-lh.googleusercontent.com/6KZjHJfNBoNdOFSWmrreiZq8lWgqg1YDtnH9FjdFoBnifWfZGA8Y7GQgUXFAdaUswU-v=s256-rw",
    },
    {
      name: "Meetups #7",
      description: "Hello World!",
      type: "Mumbai",
      time: "14-Dec, 10:10am",
      image:
        "https://play-lh.googleusercontent.com/yssuOUUgzoiZve-NfSvkykhAP9QbnFEL-NfLNHmTjnAcLCMnEpZsvwg1brdSuRZrqg=s256-rw",
    },
    {
      name: "Meetups #8",
      description: "Hello World!",
      type: "Mumbai",
      time: "14-Dec, 10:10am",
      image:
        "https://play-lh.googleusercontent.com/hSyebBlYwtE2aMjzSIHasUO9cQv9HgNAw9owy6ADO0szOKYO3rDk60r7jcyXu82Fbq1M=s256-rw",
    },
  ];
  return (
    <div>
      <div className="mt-10 mb-10">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xl font-semibold text-gray-700 text-left mb-2">
            Meetings
          </h4>
          <button className="btn btn-outline btn-sm rounded-md">
            All Items
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-gray-900 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="w-full h-40 rounded-t-lg"
                  src={item.image}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-white dark:text-white">
                    {item.name}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center text-white-900 justify-between">
                  <div>
                    <span className="text-3xl font-bold text-white dark:text-white">
                      {item.type}
                    </span>
                    <br />
                    <span className="text-xl font-medium text-white dark:text-white">
                      {item.description}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {item.time}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
