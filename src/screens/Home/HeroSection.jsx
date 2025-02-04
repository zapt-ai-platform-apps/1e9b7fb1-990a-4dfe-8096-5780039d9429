import React from 'react';

export default function HeroSection({ loading, handleStart }) {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-purple-700 text-white py-32 px-4 overflow-hidden animate-fadeIn">
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?cyber,technology')] bg-cover bg-center opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          المحقق السيبراني الخاص
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl drop-shadow-md">
          استعد لاستكشاف عالم الأمان الرقمي مع خبير يجمع ويحلل البيانات الاستخباراتية للكشف عن الثغرات وتعزيز دفاعات الأنظمة.
        </p>
        <button
          onClick={handleStart}
          disabled={loading}
          className="cursor-pointer bg-white text-blue-700 py-3 px-8 rounded-full font-bold shadow-xl hover:bg-gray-100 transition disabled:opacity-50"
        >
          {loading ? 'جاري التحميل...' : 'ابدأ الآن'}
        </button>
      </div>
    </section>
  );
}