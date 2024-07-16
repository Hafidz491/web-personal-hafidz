const ButtonBackToTop = () => {
  return (
    <div>
      <a
        href="#navbar"
        id="to-top"
        className="fixed items-center justify-center hidden p-4 border rounded-full h-14 w-14 backdrop-blur-md bg-white/10 border-white/10 z-999 bottom-4 right-4 hover:animate-pulse md:block"
      >
        <span className="block w-5 h-5 mx-auto mt-2 rotate-45 border-t-2 border-l-2"></span>
      </a>
    </div>
  );
};

export default ButtonBackToTop;
