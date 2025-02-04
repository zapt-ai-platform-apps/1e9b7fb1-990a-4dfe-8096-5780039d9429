import React from 'react';

export default function TasksSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">المهام الأساسية</h2>
        <ul className="space-y-4 text-lg">
          <li>• جمع المعلومات الاستخباراتية من المصادر المفتوحة.</li>
          <li>• تحليل الثغرات الأمنية باستخدام أدوات متقدمة.</li>
          <li>• تنفيذ اختبارات الاختراق لمحاكاة سيناريوهات الهجوم.</li>
          <li>• إعداد تقارير التقييم والتوصيات الأمنية.</li>
          <li>• تحليل التهديدات وتطوير استراتيجيات الدفاع السيبراني.</li>
          <li>• إجراء التحقيقات الجنائية الرقمية وجمع الأدلة.</li>
          <li>• التدريب والتطوير المستمر في مجال الأمن الرقمي.</li>
        </ul>
      </div>
    </section>
  );
}