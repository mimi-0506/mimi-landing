import Image from "next/image";

export default function Page4() {
  return (
    <div className="bg-gradient-to-r from-pink-200 to-pink-400 rounded-xl p-10 text-white max-w-4xl mx-auto shadow-lg">
      <h2 className="text-center text-2xl font-semibold mb-6">
        What our customer are saying
      </h2>
      <div className="w-12 h-0.5 bg-white mx-auto mb-8 rounded-full" />

      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-lg text-white">Edward Newgate</p>
          <p className="text-sm mb-4">Founder Circle</p>
          <p className="text-white/90 max-w-md">
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedious form, long calls, or
            administrative hassle) and securely”
          </p>
        </div>
      </div>
    </div>
  );
}
