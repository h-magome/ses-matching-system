import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Briefcase } from 'lucide-react';
import ProjectDetailModal from '../components/ProjectDetailModal';

const EngineerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showMatchingProjects, setShowMatchingProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Mock engineer data (in a real app, you'd fetch this data based on the ID)
  const engineer = {
    id: 1,
    name: 'SH',
    age: 34,
    gender: '男性',
    station: '総武線両国駅',
    availability: '2024年10月1日～',
    type: '弊社社員',
    rate: '53万円（※応相談：稼働優先のためご相談ください）',
    skills: [
      { name: 'テスト', experience: '1年以上' },
      { name: 'JP1運用保守', experience: '1年以上' },
      { name: 'ヘルプデスク', experience: '1年半以上' },
    ],
    projects: [
      '一眼レフカメラのファームウェア検証',
      '給付金申請に関するヘルプデスク',
      '医療機関ヘルプデスク',
      '財務会計システム運用保守業務',
      '現行システム更改テスター業務',
    ],
    commute: '常駐可能',
    interview: '都度相談',
    desiredProjects: '案件内容不問（対応できそうなものであれば可、チャレンジ枠も可）',
    personality: `
      物腰が柔らかく、非常に真面目で丁寧な方です。現場からは、報連相が非常に丁寧で、
      安心して仕事を任せられるというご評価を頂いています。
      PM、SVとして、メンバーにタスクを割り振るなどのマネジメント業務も併せて、
      担っていました。
      残業時間が40時間を超えるようなプロジェクトでも、業務をこなしてきたタフさも持ち合わせております。
      また、フル出社に対しても何も抵抗がなく、真面目にコツコツと働くことができます。
    `,
    skillSheetUrl: 'https://docs.google.com/spreadsheets/d/1QXoGdku4tHJUsnMDkvaHKqBOvJG_vkJs/edit?usp=sharing&ouid=104541632706859062475&rtpof=true&sd=true',
  };

  // Mock matching projects data
  const matchingProjects = [
    {
      id: 1,
      title: 'Javaで構築された在庫管理システムの総合テスト実施案件',
      content: '提示されたシナリオに沿ったテストの実施をお願いいたします。\n※テスター案件ではありません。',
      environment: [
        'OS：Windows 10, 11, Windows Server 20XX',
        '言語：Java、JavaScript、HTML/CSS',
        'DB：SQL Server 20XX',
      ],
      skills: {
        required: [
          'B票（バグ票・バグレポートなど）が書ける方　※重要',
          'シナリオ・チェックリスト通りに操作し、他人が検証できるエビデンスを取得できる方',
          'コミュニケーション能力、勤怠に問題がない方',
          '作業方法はレクチャーするので、やり方を覚えた後はある程度自走できる方',
        ],
        preferred: [
          '在庫管理システムの業務知識がある方',
          'テストデータ作成が可能な方',
        ],
      },
      period: '2024年11月～12月　（短期）',
      location: '西新橋',
      headcount: '3名（メンバー枠）　※同じ所属会社のメンバーを希望',
      rate: '45～50万円',
      foreignNationality: '不可',
      workHours: '140-180h',
      interviews: '1回',
      commercialFlow: '貴社まで（支援費相談可）',
      remarks: '勤務時間9:00～18:00（8h）',
    },
    // ... 他のプロジェクトデータ
  ];

  const handleMatchingClick = () => {
    setShowMatchingProjects(!showMatchingProjects);
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <Link to="/engineers" className="flex items-center text-green-600 hover:text-green-800 mb-4">
        <ArrowLeft size={20} className="mr-2" />
        エンジニア一覧に戻る
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">エンジニア詳細</h1>
      <div className="space-y-4">
        <p><strong>氏名：</strong>{engineer.name}（{engineer.age}歳・{engineer.gender}）</p>
        <p><strong>最寄り駅：</strong>{engineer.station}</p>
        <p><strong>稼働：</strong>{engineer.availability}</p>
        <p><strong>所属：</strong>{engineer.type}</p>
        <p><strong>単価：</strong>{engineer.rate}</p>
        <div>
          <strong>スキル：</strong>
          <ul className="list-disc list-inside ml-4">
            {engineer.skills.map((skill, index) => (
              <li key={index}>{skill.name}（{skill.experience}）</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>経験PJ：</strong>
          <ul className="list-disc list-inside ml-4">
            {engineer.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <p><strong>通勤：</strong>{engineer.commute}</p>
        <p><strong>面談：</strong>{engineer.interview}</p>
        <p><strong>希望案件：</strong>{engineer.desiredProjects}</p>
        <div>
          <strong>詳しい人柄：</strong>
          <p className="whitespace-pre-line">{engineer.personality}</p>
        </div>
        <p>
          <strong>スキルシート：</strong>
          <a href={engineer.skillSheetUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            スキルシートを見る
          </a>
        </p>
        <button
          onClick={handleMatchingClick}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center"
        >
          <Briefcase size={20} className="mr-2" />
          案件をマッチングする
        </button>
        {showMatchingProjects && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">マッチング案件</h2>
            <div className="space-y-4">
              {matchingProjects.map(project => (
                <div
                  key={project.id}
                  className="bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleProjectClick(project)}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600">期間: {project.period}</p>
                  <p className="text-gray-600">場所: {project.location}</p>
                  <div className="mt-2">
                    <strong>必要スキル：</strong>
                    {project.skills.required.slice(0, 3).map((skill, index) => (
                      <span key={index} className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full mr-2 mt-1">
                        {skill}
                      </span>
                    ))}
                    {project.skills.required.length > 3 && (
                      <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full mr-2 mt-1">
                        ...
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default EngineerDetail;