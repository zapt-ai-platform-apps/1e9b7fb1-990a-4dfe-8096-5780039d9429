import React, { useState } from 'react';
import { submitInvestigation } from '../../services/investigationService';

export default function InvestigationFlow() {
  const [informationType, setInformationType] = useState('');
  const [loading, setLoading] = useState(false);
  const [nextStep, setNextStep] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!informationType.trim()) return;
    setLoading(true);
    setErrorMessage('');
    console.log('Submitting information type:', informationType);
    try {
      const data = await submitInvestigation(informationType);
      console.log('API response:', data);
      setNextStep(data.next_step);
    } catch (error) {
      console.error('Error during API call:', error);
      setErrorMessage('حدث خطأ أثناء إرسال البيانات. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-900 px-4">
      <div className="w-full max-w-md bg-white rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">جمع المعلومات الاستخباراتية</h2>
        {!nextStep && (
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 font-semibold" htmlFor="informationType">
              ما هو نوع المعلومات التي تريد جمعها؟
            </label>
            <input
              id="informationType"
              type="text"
              value={informationType}
              onChange={(e) => setInformationType(e.target.value)}
              placeholder="اكتب نوع المعلومات هنا"
              className="w-full border border-gray-300 p-2 mb-4 box-border"
            />
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-800 disabled:opacity-50 transition"
            >
              {loading ? 'جاري الإرسال...' : 'إرسال'}
            </button>
          </form>
        )}
        {nextStep && (
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">الخطوة التالية</h3>
            <p className="mb-2">
              <span className="font-semibold">النوع:</span> {nextStep.type}
            </p>
            {nextStep.details && nextStep.details.message && (
              <p className="mb-2">
                <span className="font-semibold">الرسالة:</span> {nextStep.details.message}
              </p>
            )}
            <p className="mb-2">
              <span className="font-semibold">معرّف العقدة التالية:</span> {nextStep.next_node_id}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}