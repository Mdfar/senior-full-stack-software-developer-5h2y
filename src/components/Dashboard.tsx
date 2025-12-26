import React from 'react';

const Dashboard = ({ stats }) => { return ( <div className="p-8 bg-gray-50 min-h-screen"> <h1 className="text-3xl font-bold text-slate-900">Enterprise Onboarding Portal</h1> <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"> <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200"> <p className="text-sm text-slate-500 uppercase">Active Agents</p> <p className="text-2xl font-semibold">12 Running</p> </div> <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200"> <p className="text-sm text-slate-500 uppercase">Avg. Time to Value</p> <p className="text-2xl font-semibold">4.2 Days</p> </div> </div> </div> ); };

export default Dashboard;