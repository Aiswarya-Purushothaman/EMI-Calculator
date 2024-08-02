import React, { useState } from 'react';

const EMICalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(2.4);
  const [term, setTerm] = useState(2);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [history, setHistory] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const calculateEMI = (principal, rate, term) => {
    const monthlyRate = rate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    const totalInterest = (emi * term) - principal;
    const totalPayable = principal + totalInterest;
    return { emi: emi.toFixed(2), totalInterest: totalInterest.toFixed(2), totalPayable: totalPayable.toFixed(2) };
  };

  const handleCalculate = () => {
    const { emi, totalInterest, totalPayable } = calculateEMI(principal, rate, term);
    setEmi(emi);
    setTotalInterest(totalInterest);
    setTotalPayable(totalPayable);

    if (editIndex >= 0) {
      const updatedHistory = [...history];
      updatedHistory[editIndex] = {
        principal,
        rate,
        term,
        emi,
        totalInterest,
        totalPayable,
      };
      setHistory(updatedHistory);
      setEditIndex(-1);
    } else {
      const newEntry = {
        principal,
        rate,
        term,
        emi,
        totalInterest,
        totalPayable,
      };
      setHistory([newEntry, ...history]);
    }
  };

  const handleEdit = (index) => {
    const entry = history[index];
    setPrincipal(entry.principal);
    setRate(entry.rate);
    setTerm(entry.term);
    setEditIndex(index);
  }

  return (

    <div className="flex p-5">
      <div className="max-w-md mx-auto bg-white p-6 h-full rounded-lg shadow-md w-1/2">
        <h1 className="text-xl font-semibold mb-4">Calculate your EMI</h1>
        <div className="mb-4">
          <label className="block text-gray-700">How much capital do you want?</label>
          <input
            type="range"
            min="1000"
            max="1000000"
            step="1000"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-blue-700 font-semibold">₹ {principal.toLocaleString()}</div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rate of interest (monthly)</label>
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-blue-700 font-semibold">{rate}%</div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tenure</label>
          <input
            type="range"
            min="1"
            max="360"
            step="1"
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-blue-700 font-semibold">{term} months</div>
        </div>
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {editIndex >= 0 ? 'Update EMI' : 'Calculate EMI'}
        </button>
        {emi > 0 && (
          <div className="mt-6 p-4 bg-blue-100 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">EMI Details</h2>
            <p className="text-blue-700 font-semibold">Monthly EMI: ₹ {emi}</p>
            <p className="text-blue-700 font-semibold">Total Interest: ₹ {totalInterest}</p>
            <p className="text-blue-700 font-semibold">Total Payable: ₹ {totalPayable}</p>
          </div>
        )}
      </div>

      <div className="max-w-md mx-auto p-6 w-1/2">
        {history.length > 0 && (
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Calculation History</h2>
            <ul className="space-y-2">
              {history.map((entry, index) => (
                <li key={index} className="p-2 bg-white rounded-md shadow-md flex justify-between items-center">
                  <div>
                    <div className="flex items-center mb-1">
                      <label className="block text-gray-700 mr-2">Principal: </label>
                      <input
                        type="number"
                        value={entry.principal}
                        onChange={(e) => {
                          const updatedHistory = [...history];
                          updatedHistory[index].principal = Number(e.target.value);
                          setHistory(updatedHistory);
                        }}
                        className="border rounded-md p-1"
                      />
                    </div>
                    <div className="flex items-center mb-1">
                      <label className="block text-gray-700 mr-2">Rate: </label>
                      <input
                        type="number"
                        step="0.1"
                        value={entry.rate}
                        onChange={(e) => {
                          const updatedHistory = [...history];
                          updatedHistory[index].rate = Number(e.target.value);
                          setHistory(updatedHistory);
                        }}
                        className="border rounded-md p-1"
                      />
                    </div>
                    <div className="flex items-center mb-1">
                      <label className="block text-gray-700 mr-2">Term: </label>
                      <input
                        type="number"
                        value={entry.term}
                        onChange={(e) => {
                          const updatedHistory = [...history];
                          updatedHistory[index].term = Number(e.target.value);
                          setHistory(updatedHistory);
                        }}
                        className="border rounded-md p-1"
                      />
                    </div>
                    <p className="text-blue-700 font-semibold">EMI: ₹ {entry.emi}</p>
                    <p className="text-blue-700 font-semibold">Total Interest: ₹ {entry.totalInterest}</p>
                    <p className="text-blue-700 font-semibold">Total Payable: ₹ {entry.totalPayable}</p>
                  </div>
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white py-1 px-2 rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EMICalculator;
