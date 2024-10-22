import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';

const EngineerList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  // Mock engineer data
  const engineers = [
    { id: 1, name: 'SH', age: 34, gender: '男性', type: '社員', skills: ['テスト', 'JP1運用保守', 'ヘルプデスク'], experience: '5年' },
    { id: 2, name: '佐藤花子', age: 28, gender: '女性', type: 'フリーランス', skills: ['Python', 'Django', 'Docker'], experience: '3年' },
    { id: 3, name: '鈴木一郎', age: 32, gender: '男性', type: 'BP', skills: ['Java', 'Spring', 'Kubernetes'], experience: '7年' },
    { id: 4, name: '高橋次郎', age: 30, gender: '男性', type: '社員', skills: ['Vue.js', 'Ruby on Rails', 'GCP'], experience: '4年' },
  ];

  const filteredEngineers = engineers.filter(engineer =>
    engineer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === '' || engineer.type === filter)
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">エンジニア一覧</h1>
      <div className="flex mb-4 space-x-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="エンジニアを検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none w-48 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="">全てのタイプ</option>
            <option value="社員">社員</option>
            <option value="フリーランス">フリーランス</option>
            <option value="BP">BP</option>
          </select>
          <Filter className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="space-y-4">
        {filteredEngineers.map(engineer => (
          <Link href={`/engineers/${engineer.id}`} key={engineer.id}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{engineer.name}（{engineer.age}歳・{engineer.gender}）</h2>
              <p className="text-gray-600 mb-2">タイプ: {engineer.type}</p>
              <p className="text-gray-600 mb-4">経験: {engineer.experience}</p>
              <div className="flex flex-wrap gap-2">
                {engineer.skills.map(skill => (
                  <span key={skill} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EngineerList;