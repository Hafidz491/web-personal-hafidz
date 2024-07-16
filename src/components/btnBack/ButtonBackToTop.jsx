const ButtonBackToTop = () => {
  return (
    <div>
      <a
        href="#navbar"
        id="to-top"
        class="h-14 w-14 backdrop-blur-md bg-white/10 border border-white/10 rounded-full fixed z-999 bottom-4 right-4 p-4 items-center justify-center hover:animate-pulse hidden md:block"
      >
        <span class="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2 mx-auto"></span>
      </a>
    </div>
  );
};

export default ButtonBackToTop;
