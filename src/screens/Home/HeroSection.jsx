import React from 'react';

export default function HeroSection({ loading, handleStart }) {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-purple-800 text-white py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        المحقق السيبراني الخاص
      </h1>
      <p className="text-lg md:text-2xl text-center max-w-2xl mx-auto">
        خبير أمن معلومات يجمع ويحلل البيانات الاستخباراتية لاكتشاف الثغرات الأمنية وتحسين الدفاعات.
      </p>
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleStart}
          disabled={loading}
          className="cursor-pointer bg-white text-blue-700 py-3 px-6 font-semibold rounded hover:bg-gray-100 transition disabled:opacity-50"
        >
          {loading ? 'جاري التحميل...' : 'ابدأ الآن'}
        </button>
      </div>
    </section>
  );
}