import InputPin from "../components/atoms/InputPin"
import Logo from "../components/atoms/Logo"

function CreatePin() {
  return (
    
    <main className="flex flex-col md:flex-row min-h-screen w-full  md:bg-primary overflow-hidden">
      
    
      <section className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8  md:px-20  py-32 md:py-0 md:rounded-r-[40px] ">
        
        <div className="max-w-md w-full mx-auto flex flex-col gap-8">
          <Logo textColor="text-primary" />

          <div className="desc flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-bold">
              Enter Your Pin 👋
            </h1>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              Please save your pin because this is so important.
            </p>
          </div>


          <div className="py-4">
            <InputPin />
          </div>

          <button className="bg-primary w-full py-3 md:py-4 rounded-xl text-white   hover:bg-blue-700 ">
            Submit
          </button>

          <div className="reset text-center text-sm">
            <p className="text-gray-500">
              Forgot Your PIN? <span className="text-blue-600  cursor-pointer">Reset</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. BAGIAN KANAN (Ilustrasi) */}
      {/* hidden md:flex berarti hilang di HP, muncul sebagai flexbox di Laptop/Desktop */}
      <aside className="hidden md:flex md:w-1/2 bg-primary items-center justify-center p-10">
        <img 
          src="/character.png" 
          alt="illustration" 
          className="w-full max-w-lg object-contain animate-float" // Tambahkan animasi jika perlu
        />
      </aside>

    </main>
  );
}

export default CreatePin;