export default function Footer() {
  return (
    <footer className="bg-gray-50 border-gray-100 border-t">
      <div className="container">
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
            Inovação que impulsiona negócios e cria impacto positivo
          </h3>
          <h6 className="mb-10 text-center tracking-tighter text-md leading-8 text-gray-600 lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-right lg:text-lg">
            Fale conosco <br />
            <a
              href="mailto:contato@inovaesg.com"
              className="hover:text-pesto-700 transition-colors duration-200 underline"
            >
              contato@inovaesg.com
            </a>
          </h6>
        </div>
      </div>
    </footer>
  );
}
