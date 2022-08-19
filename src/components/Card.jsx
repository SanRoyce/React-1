const Card = ({ imagen, title, descripcion }) => {
  return (
    <>
      <div class="m-5">
        <a
          href="#"
          class="flex flex-col items-center bg-black rounded-lg border border-indigo-500	 shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-white-700 m-5"
        >
          <img
            class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={imagen}
            alt="Bleach"
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-indigo-500 dark:text-white">
              {title}
            </h5>
            <p class="mb-3 font-normal text-indigo-500 dark:text-gray-400">
              {descripcion}
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Card;
