import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';

const ProjectList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  // Mock project data
  const projects = [
    {
      id: 1,
      title: 'Javaで構築された在庫管理システムの総合テスト実施案件',
      period: '2024年11月～12月　（短期）',
      location: '西新橋',
      skills: {
        required: [
          'B票（バグ票・バグレポートなど）が書ける方　※重要',
          'シナリオ・チェックリスト通りに操作し、他人が検証できるエビデンスを取得できる方',
          'コミュニケーション能力、勤怠に問題がない方',
          '作業方法はレクチャーするので、やり方を覚えた後はある程度自走できる方',
        ],
      },
    },
    {
      id: 2,
      title: 'AI-powered Chatbotの開発プロジェクト',
      period: '2024年12月～2025年5月（6ヶ月）',
      location: '渋谷（リモート勤務可）',
      skills: {
        required: [
          'Python開発経験3年以上',
          'AIまたは機械学習プロジェクトの経験',
          'RESTful APIの設計と実装経験',
        ],
      },
    },
    // 他のプロジェクトデータをここに追加...
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === '' || project.skills.required.some(skill => skill.includes(filter)))
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">案件一覧</h1>
      <div className="flex mb-4 space-x-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="案件を検索..."
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
            <option value="">全てのスキル</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="AI">AI</option>
            <option value="テスト">テスト</option>
          </select>
          <Filter className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="space-y-4">
        {filteredProjects.map(project => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">期間: {project.period}</p>
              <p className="text-gray-600 mb-4">場所: {project.location}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.required.slice(0, 3).map((skill, index) => (
                  <span key={index} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
                {project.skills.required.length > 3 && (
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    ...
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;