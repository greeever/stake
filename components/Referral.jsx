const Referral = () => {
    return (
        <>
        <aside
  className="overflow-hidden bg-yellow-100 sm:grid sm:grid-cols-2 sm:items-center"
>
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="max-w-xl mx-auto text-center sm:text-left">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
       REFER FRIENDS.
       {" "}
       JOIN CHASE PRESALE #SHARETOEARN PROGRAM.
       GET 5% AND 100 BUSD.
      </h2>

      <p className="hidden text-gray-700 md:mt-4 md:block">
       You are just steps away from receiving your rewards
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="relative inline-block group focus:outline-none focus:ring focus:ring-yellow-400"
        >
          <span
            className="relative z-10 block px-12 py-3 text-sm font-medium text-white transition bg-gray-900 rounded group-hover:scale-105"
          >
            Join
          </span>

          <span
            className="absolute inset-0 transition scale-105 rounded bg-gray-900/25 -rotate-3 group-hover:rotate-0"
          ></span>
        </a>
      </div>
    </div>
  </div>

  <img
    alt="#"
    src="/referral.svg"
    className="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end border-l-4 border-t-4 border-gray-900"
  />
</aside>

        </>
    )
}

export default Referral